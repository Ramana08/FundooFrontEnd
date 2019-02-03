import { Component, OnInit } from '@angular/core';
// import {AuthService} from '../auth.service';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginModel } from 'src/app/models/login.model';
import { UserserviceService } from 'src/app/service/user-service.service';
import { CardUpdateServiceService } from 'src/app/service/card-update-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private updateCrud : CardUpdateServiceService, private router: Router, private userService: UserserviceService, private snackBar: MatSnackBar, private formBuilder: FormBuilder) { }
  login: LoginModel= new LoginModel();
  loginForm: FormGroup
  tempEmail: String
  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        'email': [this.login.email,
        [
          Validators.required,
          Validators.email
        ]
        ],
        'password': [this.login.password,
        [
          Validators.required
        ]
        ]
      }
    );
  }
  logIn(): void {

    // this.tempEmail = this.login.email
    // console.log(this.tempEmail)
    this.userService.verifyLogin(this.login).subscribe(

      (response: any) => {
        console.log(response.body.statusCode)
        //    console.log(response.HttpHeaders);
        if (response.body.statusCode == 166) {
          this.snackBar.open(response.body.statusMessage, "", {
            duration: 2000,
          })
          console.log(response)
          // console.log(response.headers.get('jwtToken'));
          console.log(response.body);
          
          localStorage.setItem('loginItem', JSON.stringify(response.body));

          localStorage.setItem('jwtToken', response.headers.get('jwttokenxxx'));
          this.updateCrud.changemessage();
          this.router.navigate(['/dashBoard'])
        }

        else if (response.body.statusCode == 404) {
          this.snackBar.open(response.statusMessage, "Invalid User", {
            duration: 2000,
          })
        }
      },

      error => {
        this.snackBar.open("user password is invalid", "Invalid User", {
          duration: 2000,
        })
        console.log("Error", error);
      }
    );
  }

  forgetPassword(): void {
    this.router.navigate(["forgetPassword"]);

  }
  register(): void {
    this.router.navigate(["register"]);
  }
}


