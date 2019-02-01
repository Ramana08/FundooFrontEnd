import { Component, OnInit, Input } from '@angular/core';
import { NoteModel } from 'src/app/models/note.model';
import { NoteserviceService } from 'src/app/service/noteservice.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  showIconAndLetter: boolean =true;
  showArchiveNoteBar : boolean = false;
noteBarValue : NoteModel[];
  @Input() noteDetail : NoteModel;

  constructor(private noteCrud : NoteserviceService) { }

  ngOnInit() {
    this.noteCrud.getTrashNotes().subscribe(
      response => {
        this.noteBarValue=response;
        console.log('archive')
        console.log(this.noteBarValue)
        if(this.noteBarValue.length==0)
        {
         this.showIconAndLetter=true;
         this.showArchiveNoteBar=false;
        }
        else{
          this.showIconAndLetter=false;
          this.showArchiveNoteBar=true;
        }
        console.log(this.showIconAndLetter,this.showArchiveNoteBar);
        
       }
     )
  }

}
