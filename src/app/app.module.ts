import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ColorPickerModule } from 'ngx-color-picker';
import { MaterialModule } from './modules/material/material.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNeopixelDialogComponent } from './neopixel/add-neopixel-dialog/add-neopixel-dialog.component';
import { PixelColorDialogComponent } from './neopixel/pixel-color-dialog/pixel-color-dialog.component';

import { NeopixelService } from 'src/app/services/neopixel/neopixel.service';
import { AnimationComponent } from './animation/animation.component';
import { NeopixelComponent } from './neopixel/neopixel.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddNeopixelDialogComponent,
    PixelColorDialogComponent,
    AnimationComponent,
    NeopixelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,
    MaterialModule
  ],
  entryComponents: [
    AddNeopixelDialogComponent,
    PixelColorDialogComponent
  ],
  providers: [
    NeopixelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
