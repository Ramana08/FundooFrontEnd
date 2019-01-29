import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../models/login.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserserviceService } from '../user-service.service';
import {MatDialog, MatSnackBar} from '@angular/material'

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  login : LoginModel = new LoginModel();
  forgetForm : FormGroup
  constructor(private router:Router,private userService : UserserviceService, private snackBar : MatSnackBar, private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.forgetForm=this.formBuilder.group(
      {
       'email' : [this.login.email,
        [
            Validators.required,
            Validators.email
        ]
      ],
      'password' : [this.login.password,
        [
          Validators.required
        ]
      ]
      }
    );
  }
  submit() : void
  {
    (this.userService.resetPassword(this.login)).subscribe(
     data => {
      if(data.statusCode== 200)
      {

        this.snackBar.open('Confirm your Mail by Submit OtpVerify to your Corresponding Mail', 'otpVerfify', {
          duration: 2000,});
          this.router.navigate(['/resetOtpVerify']);
      }
      else if(data.statusCode==404)
      {
        console.log(data.statusMessage)
      this.snackBar.open(data.statusMessage,"Register Fails",{
        duration:2000,})
      }},
      
     error => {
      this.snackBar.open("alreadyExixt","Register Fails",{
        duration:2000,})
         console.log("Error", error);
     }
      
    );

  }
}
