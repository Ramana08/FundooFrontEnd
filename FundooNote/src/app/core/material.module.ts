import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule,MatSidenavModule,
  MatListModule,MatExpansionModule, MatSnackBarModule,MatTooltipModule,MatDividerModule
} from '@angular/material';
@NgModule({
  imports: [
  CommonModule, 
  MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatSidenavModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatDividerModule
  
  ],
  exports: [
  CommonModule,
   MatToolbarModule, 
   MatButtonModule, 
   MatCardModule, 
   MatInputModule, 
   MatDialogModule, 
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatListModule,
   MatSidenavModule,
   MatExpansionModule,
   MatSnackBarModule,
   MatTooltipModule,
   MatDividerModule
   ],
})
export class CustomMaterialModule { }