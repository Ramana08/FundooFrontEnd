import { Component, OnInit, Input } from '@angular/core';
import { NoteModel } from '../models/note.model';
import { NoteserviceService } from '../noteservice.service';


@Component({
  selector: 'app-note-bar',
  templateUrl: './note-bar.component.html',
  styleUrls: ['./note-bar.component.css']
})
export class NoteBarComponent implements OnInit {

  noteBarValue : NoteModel =new  NoteModel();
  noteBar : boolean = false;
  constructor(private noteService : NoteserviceService) { }

  @Input() noteDetail : NoteModel;
  ngOnInit() 
  {
    // this.noteService.getNotes().subscribe(
    //   response => {
    //     this.noteBarValue=response;
    //     console.log(this.noteBarValue)
    //       if(this.noteBarValue != null)
    //             this.noteBar=true
    //    }
    //  )
     
  }


}
