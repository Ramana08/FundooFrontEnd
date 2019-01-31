import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from '../noteservice.service';
import { NoteModel } from '../models/note.model';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  showIconAndLetter: boolean =true;
  showArchiveNoteBar : boolean = false;
  noteBarValue : NoteModel[];
  constructor(private noteCrud : NoteserviceService) { }

  ngOnInit() {

this.noteCrud.getArchiveNotes().subscribe(
  response => {
    this.noteBarValue=response;
    console.log(this.noteBarValue)
    if(this.noteBarValue!=null)
    {
     this.showIconAndLetter=false;
     this.showArchiveNoteBar=true;
    }
   }
 )
  }

}
