import { Component, OnInit } from '@angular/core';
import { NoteModel } from '../models/note.model';

@Component({
  selector: 'app-note-bar',
  templateUrl: './note-bar.component.html',
  styleUrls: ['./note-bar.component.css']
})
export class NoteBarComponent implements OnInit {

  note : NoteModel =new  NoteModel();
  constructor() { }

  ngOnInit() {
  }

}
