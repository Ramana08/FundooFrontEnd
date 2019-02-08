import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrashComponent } from '../component/trash/trash.component';
import { ArchiveComponent } from '../component/archive/archive.component';
import { RemaindersComponent } from '../component/remainders/remainders.component';
import { NoteBarComponent } from '../component/note-bar/note-bar.component';
import { NoteComponent } from '../component/note/note.component';
import { MaterialDashboardComponent } from '../component/material-dashboard/material-dashboard.component';
import { RegisterComponent } from '../component/register/register.component';
import { HomeComponent } from '../component/home/home.component';
import { OtpVerificationComponent } from '../component/otp-verification/otp-verification.component';
import { ResetOtpVerifyComponent } from '../component/reset-otp-verify/reset-otp-verify.component';
import { ForgetPasswordComponent } from '../component/forget-password/forget-password.component';
import { LoginComponent } from '../component/login/login.component';

const appRoutes : Routes =[
  {
    path:'login',//localhost:4200/data
    component:LoginComponent
  },
 
  {
    path:'forgetPassword',
    component: ForgetPasswordComponent
  },
  {
    path:"resetOtpVerify",
    component:ResetOtpVerifyComponent
  },
  {
    path:'otpVerify',
    component: OtpVerificationComponent
  },
  {
    path:'',
    component: HomeComponent
  },
  
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'dashBoard',
    component:MaterialDashboardComponent,
    children:[
      {
        
        path:'',
        component:NoteComponent
      },
      {
        path:'addNote',
        component:NoteComponent,
        children:[
          {
            path:'',
            component: NoteBarComponent
          }
        ]
      },
     {
        path:'remainder',
        component: RemaindersComponent
        
      },
     
      {
        path:'archive',
        component: ArchiveComponent
      }
      ,
      {
        path:'trash',
        component: TrashComponent
      }
    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports : [RouterModule],
  declarations: []
})
export class RoutingModule { }
