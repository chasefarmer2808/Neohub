import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, 
         MatIconModule, 
         MatDialogModule,
         MatFormFieldModule, 
         MatSelectModule,
         MatOptionModule,
         MatInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNeopixelDialogComponent } from './dashboard/add-neopixel-dialog/add-neopixel-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddNeopixelDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule
  ],
  entryComponents: [
    AddNeopixelDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
