import { Component, OnInit, Input } from '@angular/core';
import { NoteModel } from 'src/app/models/note.model';

@Component({
  selector: 'app-trash-bar',
  templateUrl: './trash-bar.component.html',
  styleUrls: ['./trash-bar.component.css']
})
export class TrashBarComponent implements OnInit {

  @Input() noteDetail : NoteModel;

  constructor() { }

  ngOnInit() {
  }

}
