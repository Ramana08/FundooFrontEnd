import { Component, OnInit } from '@angular/core';
import { NoteModel } from '../models/note.model';
import { NoteserviceService } from '../noteservice.service';
import { MatSnackBar } from '@angular/material';
import {Router} from '@angular/router';


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
  constructor(private router : Router ,private notecrud : NoteserviceService , private snackBar : MatSnackBar) { }

  ngOnInit() {

this.showBrush=!this.showBrush
this.notecrud.getAllNotes().subscribe(
  response => {
    this.noteBarValue=response;
    console.log(this.noteBarValue)
      if(this.noteBarValue != null)
      {
            this.noteBar=true
            this.showIcon=false
      }
      else
          this.showIcon=true

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
    
    data => { 
      //console.log(data.statusMessage,data.statusCode)
      if(data.statusCode== 166)
      {
        
          this.snackBar.open('Note Added Successfully', '', {
            duration: 2000,});
            
      }
     },
      
     error => {
      // this.snackBar.open("alreadyExixt","Register Fails",{
      //   duration:2000,})
         console.log("Error", error);
     }

    );
  //  this.noteBarValue=this.note
  this.tempNote=this.note
  console.log('temp note ',this.tempNote)
  if(this.tempNote.title!=null)
  {
  this.noteNewBar=true;
  
  }
  this.ngOnInit();
 this.note=new NoteModel(); 
}
else
{
       this.showIcon=true
  
}

}

}
