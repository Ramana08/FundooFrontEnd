import { Component, OnInit } from '@angular/core';
import { NoteModel } from 'src/app/models/note.model';
 
@Component({
  selector: 'app-remainders',
  templateUrl: './remainders.component.html',
  styleUrls: ['./remainders.component.css']
})
export class RemaindersComponent implements OnInit {

  barshow:boolean=false;
  showIcon : boolean=true;

  note : NoteModel =new NoteModel();

  constructor() { }

  ngOnInit() {
  }
  fullCardShow()
  {
    this.barshow=!this.barshow;
  }
  close()
  {
    this.barshow=!this.barshow;
    this.showIcon=false;
    if(this.note.title!=undefined)
    {

    }
    else{
      this.showIcon=true

    }
  }
}
