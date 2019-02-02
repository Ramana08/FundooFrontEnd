import { Component, OnInit, Input } from '@angular/core';
import { NoteModel } from 'src/app/models/note.model';
import { NoteserviceService } from 'src/app/service/noteservice.service';
import { MatSnackBar } from '@angular/material';
import { CardUpdateServiceService } from 'src/app/service/card-update-service.service';

@Component({
  selector: 'app-trash-bar',
  templateUrl: './trash-bar.component.html',
  styleUrls: ['./trash-bar.component.css']
})
export class TrashBarComponent implements OnInit {

  @Input() noteDetail : NoteModel;

  constructor(private noteCrud : NoteserviceService, private snackBar : MatSnackBar, private cardUpdate : CardUpdateServiceService) { }

  ngOnInit() {
  }
  restoreNote(): void 
  {
    this.noteCrud.updateTrashNote(this.noteDetail).subscribe(
      data=> {
         if(data.statusCode==166)
         {
          
           this.snackBar.open('Note Restore Successfully', '', {
             duration: 2000,});
         }
         this.cardUpdate.changemessage();
       },
           
         error => {
          
             console.log("Error", error);
         }
     
        )
}
deleteForever(): void   {    
          this.noteCrud.deleteNote(this.noteDetail).subscribe(
            data=> {
               if(data.statusCode==166)
               {
                
                 this.snackBar.open('Note Deleted Successfully', '', {
                   duration: 2000,});
               }
               this.cardUpdate.changemessage();
             },
                 
               error => {
                
                   console.log("Error", error);
               }
          )
      }   
}

