import { Component, OnInit, ɵConsole } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import {Router} from '@angular/router';
import { NoteModel } from 'src/app/models/note.model';
import { NoteserviceService } from 'src/app/service/noteservice.service';
import { CardUpdateServiceService } from 'src/app/service/card-update-service.service';
import { NoteComponent } from '../note/note.component';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  private colors:string[][]=[['white',"FireBrick","orange","LightSkyBlue"],["Lavender","HoneyDew","blue","CadetBlue"],[ "gray",
  "Peru","pink","brown"]];
  barshow:boolean=false;
  showIcon : boolean=true;
  showBrush : boolean = true;
  noteBar : boolean = false;
  noteNewBar : boolean = false;

  note : NoteModel =new NoteModel();
  tempNote : NoteModel = new NoteModel();
  noteBarValue : NoteModel[];
allNotes : NoteModel[];
  
  constructor(private router : Router ,private notecrud : NoteserviceService , private snackBar : MatSnackBar,private cardUpdate : CardUpdateServiceService) { }

  ngOnInit() {
   
    
    this.notecrud.getAllNotes().subscribe(
      response=>{
  
        this.allNotes=response;
        if(this.allNotes.length!=0)
        this.showIcon=false;
      },
      error =>{  
       console.log(error);
      }
    )          
      
  }
  fullCardShow()
  {
    this.barshow=!this.barshow;
  }
  noteBarShow()
  {
      this.noteBar=!this.noteBar
  }
  close() : void {
    // console.log(this.name,this.email,this.password,this.phoneNumber)
    
    this.barshow=!this.barshow;
   
    this.showIcon=false;
    console.log(this.note);
    if(this.note!=null)
       {
        this.noteBar=true;
  (this.notecrud.createNote(this.note)).subscribe(
    
    response =>{
      if(response.statusCode==166)
      {
        this.snackBar.open(response.statusMessage,"",{
          duration:2000,
        })
      }
      this.cardUpdate.changemessage();
    },
    error =>{
      console.log("Error",error);
    } 

    );
  //  this.noteBarValue=this.note
//   this.tempNote=this.note
//   console.log('temp note ',this.tempNote)
//   if(this.tempNote.title!=null)
//   {
//   this.noteNewBar=true;
  
//   }
 this.note=new NoteModel(); 
}


}
archive() : void
{
  console.log("archive function");
  
  this.barshow=!this.barshow;

this.notecrud.archiveNote(this.note).subscribe(
 data=> {
    if(data.statusCode==200)
    {
      if(this.allNotes.length==0)
          this.showIcon=true;
      this.snackBar.open('Note Archive Successfully', '', {
        duration: 2000,});
    }
  },
      
    error => {
     
        console.log("Error", error);
    }

   );
   
   this.note=new NoteModel(); 

}



}
