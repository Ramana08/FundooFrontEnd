import { Component, OnInit, Input } from '@angular/core';
import { NoteModel } from 'src/app/models/note.model';
import { NoteserviceService } from 'src/app/service/noteservice.service';
import { MatSnackBar } from '@angular/material';
import { CardUpdateServiceService } from 'src/app/service/card-update-service.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  showIconAndLetter: boolean =true;
  showArchiveNoteBar : boolean = false;
  private allnotes : NoteModel[];

  @Input() noteDetail : NoteModel;

  constructor(private noteCrud : NoteserviceService,private snackBar : MatSnackBar , private cardUpdate : CardUpdateServiceService) { }

  ngOnInit() {
    // this.noteCrud.getTrashNotes().subscribe(
    //   response => {
    //     this.noteBarValue=response;
    //     console.log('archive')
    //     console.log(this.noteBarValue)
    //     if(this.noteBarValue.length==0)
    //     {
    //      this.showIconAndLetter=true;
    //      this.showArchiveNoteBar=false;
    //     }
    //     else{
    //       this.showIconAndLetter=false;
    //       this.showArchiveNoteBar=true;
    //     }
    //     console.log(this.showIconAndLetter,this.showArchiveNoteBar);
        
    //    }
    //  )

    this.cardUpdate.currentnotes.subscribe(udnotes=>
      this.allnotes=udnotes);

  }

  restoreNote() : void{
    this.noteCrud.updateTrashNote(this.noteDetail).subscribe(
      data=> {
        if(data.statusCode==166)
        {
         
          this.snackBar.open('Note Archive Successfully', '', {
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
