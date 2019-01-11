import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, 
         MatIconModule, 
         MatDialogModule,
         MatFormFieldModule, 
         MatSelectModule,
         MatOptionModule,
         MatInputModule,
         MatCardModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNeopixelDialogComponent } from './dashboard/add-neopixel-dialog/add-neopixel-dialog.component';

import { NeopixelService } from 'src/app/services/neopixel/neopixel.service';

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
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatCardModule
  ],
  entryComponents: [
    AddNeopixelDialogComponent
  ],
  providers: [
    NeopixelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
