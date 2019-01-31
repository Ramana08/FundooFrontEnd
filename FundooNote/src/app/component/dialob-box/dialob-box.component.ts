import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-dialob-box',
  templateUrl: './dialob-box.component.html',
  styleUrls: ['./dialob-box.component.css']
})
export class DialobBoxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialobBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
