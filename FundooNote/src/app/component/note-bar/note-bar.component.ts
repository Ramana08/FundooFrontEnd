import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CardUpdateServiceService } from 'src/app/service/card-update-service.service';
import { NoteserviceService } from 'src/app/service/noteservice.service';
import { NoteModel } from 'src/app/models/note.model';


@Component({
  selector: 'app-note-bar',
  templateUrl: './note-bar.component.html',
  styleUrls: ['./note-bar.component.css']
})
export class NoteBarComponent implements OnInit {

  archiveShow : boolean = false;
  unarchiveShow : boolean =false;
  noteBarValue : NoteModel =new  NoteModel();
  noteBar : boolean = false;
  flag : number=0;
  constructor(private cardUpdate : CardUpdateServiceService , private snackBar : MatSnackBar , private noteService : NoteserviceService)   { }

  @Input() noteDetail : NoteModel;
  ngOnInit() 
    {
      // this.noteService.getArchiveNotes().subscribe(
      //   response => {
      //     this.noteBarValue=response;
      //     console.log(this.noteBarValue)
      //       if(this.noteBarValue != null)
      //             this.noteBar=true
      //    }
      //  )
      console.log(this.noteBarValue)
       console.log(this.noteBarValue.archive)
    // console.log('hello ',this.noteDetail)
    //  console.log(this.noteDetail.archive)
    console.log("hellllllooooo")
     if(this.noteDetail.archive==0)
          this.archiveShow=true;
      if(this.noteDetail.archive==1)
          this.unarchiveShow=true
    
  }
  unarchive() : void
  {
    console.log(this.noteDetail)
      console.log("unarchive function")
      this.noteService.updateNote(this.noteDetail).subscribe(
        data=> {
           if(data.statusCode==166)
           {
             this.snackBar.open('Note Unarchive Successfully', '', {
               duration: 2000,});
           }
           this.flag=0;
          this.cardUpdate.changemessage();
         


         },
             
           error => {
            
               console.log("Error", error);
           }
       
          );
  }

  archive() : void
  {
    console.log("archive function");
    
   console.log(this.noteDetail)
  
  this.noteService.updateNote(this.noteDetail).subscribe(
   data=> {
      if(data.statusCode==166)
      {
       
        this.snackBar.open('Note Archive Successfully', '', {
          duration: 2000,});
      }
      this.flag=1;
      this.cardUpdate.changemessage();

    },
        
      error => {
       
          console.log("Error", error);
      }
  
     );
  }

  deleteNote() : void
   {
     console.log("deleteddd");
     
     console.log(this.noteDetail)
      this.noteService.deleteNote(this.noteDetail).subscribe(
        data=> {
           if(data.statusCode==166)
           {
            
             this.snackBar.open('Note deleted Successfully', '', {
               duration: 2000,});
           }
           this.cardUpdate.changemessage();
         },
             
           error => {
            
               console.log("Error", error);
           }
       
          );
  }
}
