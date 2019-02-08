import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RecordService } from './record.service';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
// import { DataComponent } from './data/data.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { CustomMaterialModule } from './core/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterComponent } from './component/register/register.component';
import { MaterialDashboardComponent } from './component/material-dashboard/material-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { OtpVerificationComponent } from './component/otp-verification/otp-verification.component';
import { AddNoteComponent } from './component/add-note/add-note.component';
import { RemaindersComponent } from './component/remainders/remainders.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { TrashComponent } from './component/trash/trash.component';
import { UserserviceService } from './service/user-service.service';
import { ResetOtpVerifyComponent } from './component/reset-otp-verify/reset-otp-verify.component';
import { NoteserviceService } from './service/noteservice.service';
import { DialobBoxComponent } from './component/dialob-box/dialob-box.component';
import { NoteBarComponent } from './component/note-bar/note-bar.component';
import { CardUpdateServiceService } from './service/card-update-service.service';
import { NoteComponent } from './component/note/note.component';
import { TrashBarComponent } from './component/trash-bar/trash-bar.component';
import { EditCardComponent } from './component/edit-card/edit-card.component';
import { RoutingModule } from './routing/routing.module';

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
    NoteBarComponent,
    NoteComponent,
    TrashBarComponent,
    EditCardComponent

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
    RoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [UserserviceService,NoteserviceService,CardUpdateServiceService],
  bootstrap: [AppComponent],
entryComponents :[DialobBoxComponent,EditCardComponent]
})
export class AppModule { }
