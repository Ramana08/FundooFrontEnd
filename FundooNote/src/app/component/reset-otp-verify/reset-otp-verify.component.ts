import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { userOtp } from 'src/app/models/otp.module';
import { UserserviceService } from 'src/app/service/user-service.service';


@Component({
  selector: 'app-reset-otp-verify',
  templateUrl: './reset-otp-verify.component.html',
  styleUrls: ['./reset-otp-verify.component.css']
})
export class ResetOtpVerifyComponent implements OnInit {
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

  (this.userService.resetUserOtp(this.otpUser)).subscribe(
    
    data => { 
      if(data.statusCode== 200)
      {
          this.snackBar.open('Reset password successfully', 'login', {
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
