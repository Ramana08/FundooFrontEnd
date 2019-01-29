import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { UserserviceService } from '../user-service.service';
import { MatDialog } from '@angular/material';
import { DialobBoxComponent } from '../dialob-box/dialob-box.component';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-material-dashboard',
  templateUrl: './material-dashboard.component.html',
  styleUrls: ['./material-dashboard.component.css']
})
export class MaterialDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  panelOpenState : boolean
  headerName :String


  constructor(private router: Router, private dialog : MatDialog) {

  }



  ngOnInit()
  {
    
    this.headerName= "Fundoo Notes";
  }
  addNote() : void {
    this.router.navigate(["addNote"])
  }
remainder() : void{
  // this.router.navigate([""])
  this.router.navigate(["remainder"])
}
archive() : void {
  // this.router.navigate([""])
  this.router.navigate(["archive"])
}
trash() : void {
  // this.router.navigate([""])
  this.router.navigate(["trash"])
}

close() :void{
  this.panelOpenState = false;
}
logout() : void {
  localStorage.removeItem('jwtToken');

  this.router.navigate(["/login"])
}
openDialog()
{
  const dialogRef = this.dialog.open(DialobBoxComponent, {
    
    width: '250px',
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    
  });
}
}
