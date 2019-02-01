import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/service/noteservice.service';
import { NoteModel } from 'src/app/models/note.model';

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
