import { Injectable } from '@angular/core';
import { RegisterModel } from '../models/register.model';

import { HttpHeaders ,HttpClient} from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';
import { userOtp } from '../models/otp.module';
import { LoginModel } from '../models/login.model';


const httpOptions = {
  headers: new HttpHeaders({'Access-Control-Allow-Origin ': '*','Content-Type': 'application/json' }),
 
};

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  private userUrl = 'http://192.168.0.16:8080/fundoo/';

  public createUser(user: RegisterModel) :any {
    console.log(this.userUrl+'register')
    return this.http.post<RegisterModel>(this.userUrl+'register',user);
   
  }
  public verifyUser(otpUser : userOtp) : any{
    return this.http.post<userOtp>(this.userUrl+'otpVerify',otpUser);
  }
  public verifyLogin(logIn : LoginModel) : any{
    console.log(logIn)
    return this.http.post<LoginModel>(this.userUrl+'login',logIn,{headers: new HttpHeaders().set("jwtTokenxxx","")
    ,observe:'response'});
  }
  public resetPassword(login : LoginModel) : any {
    return this.http.post<LoginModel>(this.userUrl+"forgetPassword",login);
  }
  public resetUserOtp(otpUser : userOtp) : any{
    return this.http.post<userOtp>(this.userUrl+'forgetOtpVerification',otpUser);
  }
}

