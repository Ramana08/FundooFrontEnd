import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userOtp } from '../models/otp.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserserviceService } from '../user-service.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit {

  otpUser : userOtp =new userOtp();
  otpForm : FormGroup;
  constructor(private route:Router , private formBuilder : FormBuilder , private userService : UserserviceService, private snackBar : MatSnackBar) { }

  ngOnInit() {
    console.log(this.otpUser.otpPassword)
    this.otpForm=this.formBuilder.group(
      {
        'otpPassword' :[this.otpUser.otpPassword,
        [
          Validators.required
       
        ]]});
  }
otpSubmit()
{
  console.log(this.otpUser.otpPassword);

  (this.userService.verifyUser(this.otpUser)).subscribe(
    
    data => { 
      if(data.statusCode== 200)
      {
          this.snackBar.open('registerd successfully', 'login', {
            duration: 2000,});
            this.route.navigate(['/login']);
      }
    //   else if(data.statusCode==166)
    //   {
    //     this.snackBar.open('registerd successfully', 'login', {
    //       duration: 2000,});
    //       this.route.navigate(['/login']);
    //  }
      
      else
      {
        
      this.snackBar.open(data.statusMessage,"Register Fails",{
        duration:2000,})
      }},
      
     error => {
         console.log("Error", error);
     }

    );
     
}
}

