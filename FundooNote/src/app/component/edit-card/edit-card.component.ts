import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {

  colorCode: Array<Object> = [
    { name: "white", colorCode: "rgb(255, 255, 255)" },
    { name: "lightGreen", colorCode: "rgb(204, 255, 144)" },
    { name: "purple", colorCode: "rgb(215, 174, 251)" },
    { name: "red", colorCode: "rgb(242, 139, 130)" },
    { name: "Teal", colorCode: "rgb(167, 255, 235)" },
    { name: "pink", colorCode: "rgb(253, 207, 232)" },
    { name: "orange", colorCode: "rgb(251, 188, 4)" },
    { name: "blue", colorCode: "rgb(203, 240, 248)" },
    { name: "brown", colorCode: "rgb(230, 201, 168)" },
    { name: "yellow", colorCode: "rgb(255, 244, 117)" },
    { name: "darkBlue", colorCode: "rgb(174, 203, 250)" },
    { name: "gray", colorCode: "rgb(232, 234, 237)" }
    ]
    color : string

    menuOpen : boolean =false;
  isOpen:boolean=false;
  archiveShow : boolean = false;
  unarchiveShow : boolean =false;
  constructor(public dialogRef: MatDialogRef<EditCardComponent>,
    @Inject(MAT_DIALOG_DATA) public noteDetail: any) {
      console.log(noteDetail)
     }

  ngOnInit() {
    if(this.noteDetail.archive==0)
    this.archiveShow=true;
if(this.noteDetail.archive==1)
    this.unarchiveShow=true
  }
  closeAndSave(data)
  {
    this.isOpen=!this.isOpen;

    console.log(data);
  
  }
  changeColor(color)
  {
    this.noteDetail.color=color;
  }
  changePin()
  {
    this.noteDetail.pin=!this.noteDetail.pin
  }
}
