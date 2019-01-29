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

  barshow:boolean=false;
  showIcon : boolean=true;
  showBrush : boolean = true;
  noteBar : boolean = false;

  note : NoteModel =new NoteModel();
  noteBarValue : NoteModel= new NoteModel();
  constructor(private router : Router ,private notecrud : NoteserviceService , private snackBar : MatSnackBar) { }

  ngOnInit() {

this.showBrush=!this.showBrush
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
    console.log("http://localhost:8080/fundoo/addNote")
    console.log(this.note.title);
    console.log(this.note.description);
    this.barshow=!this.barshow;
   
    this.showIcon=false;
    console.log(this.note);
    if(this.note.title!=undefined)
       {
        this.noteBar=true;
  (this.notecrud.createNote(this.note)).subscribe(
    
    data => { 
      console.log(data.statusMessage,data.statusCode)
      if(data.statusCode== 166)
      {
          this.snackBar.open('Note Added Successfully', '', {
            duration: 2000,});
            
      }
     },
      
     error => {
      this.snackBar.open("alreadyExixt","Register Fails",{
        duration:2000,})
         console.log("Error", error);
     }

    );
    this.noteBarValue=this.note
 this.note=new NoteModel(); 
}
else
{
  if(this.noteBarValue.title==null)
  this.showIcon=true
  
}

}

}
