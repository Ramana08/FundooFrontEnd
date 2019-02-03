import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {

  archiveShow : boolean = false;
  unarchiveShow : boolean =false;
  constructor(public dialogRef: MatDialogRef<EditCardComponent>,
    @Inject(MAT_DIALOG_DATA) public noteDetail: any) { }

  ngOnInit() {
    if(this.noteDetail.archive==0)
    this.archiveShow=true;
if(this.noteDetail.archive==1)
    this.unarchiveShow=true
  }

}
