import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RecordService } from './record.service';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
// import { DataComponent } from './data/data.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomMaterialModule } from './core/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { RemaindersComponent } from './remainders/remainders.component';
import { ArchiveComponent } from './archive/archive.component';
import { TrashComponent } from './trash/trash.component';
import { UserserviceService } from './user-service.service';
import { ResetOtpVerifyComponent } from './reset-otp-verify/reset-otp-verify.component';
import { NoteserviceService } from './noteservice.service';
import { DialobBoxComponent } from './dialob-box/dialob-box.component';
import { NoteBarComponent } from './note-bar/note-bar.component';

// import {MatExpansionModule} from '@angular/material/expansion';

// import { ArchiveComponent } from './archive/archive.component';
// import { TrashComponent } from './trash/trash.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    LoginComponent,
  
    RegisterComponent,
    MaterialDashboardComponent,
    ForgetPasswordComponent,
    OtpVerificationComponent,
    AddNoteComponent,
    RemaindersComponent,
    ArchiveComponent,
    TrashComponent,
    ResetOtpVerifyComponent,
    DialobBoxComponent,
    NoteBarComponent

  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    CustomMaterialModule,
    HttpClientModule,
    // MatExpansionModule,
    RouterModule.forRoot([
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
            component:AddNoteComponent
          },
          {
            path:'addNote',
            component:AddNoteComponent,
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
      },
     
    ]),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [UserserviceService,NoteserviceService],
  bootstrap: [AppComponent],
entryComponents :[DialobBoxComponent]
})
export class AppModule { }
