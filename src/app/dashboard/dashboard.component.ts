import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddNeopixelDialogComponent } from './add-neopixel-dialog/add-neopixel-dialog.component';
import { PixelColorDialogComponent } from './pixel-color-dialog/pixel-color-dialog.component';

import { NeopixelService } from 'src/app/services/neopixel/neopixel.service';

import { NeopixelDataSource } from 'src/app/services/neopixel/neopixel-data-source';

import { Neopixel } from 'src/app/services/neopixel/neopixel';
import { Pixel } from '../services/neopixel/pixel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../app.component.css']
})
export class DashboardComponent implements OnInit {

  neopixels: Neopixel[];
  neopixelDataSource: NeopixelDataSource;

  constructor(private addNeopixelDialog: MatDialog,
              private pixelColorDialog: MatDialog, 
              private neopixelService: NeopixelService) { }

  ngOnInit() {
    this.neopixelDataSource = new NeopixelDataSource(this.neopixelService);
    this.neopixelDataSource.connect().subscribe(
      (neopixels) => {
        this.neopixels = neopixels;
        console.log(this.neopixels)
      }
    )
    this.neopixelDataSource.loadNeopixels();
  }

  openAddNeopixelDialog() {
    const dialogRef = this.addNeopixelDialog.open(AddNeopixelDialogComponent);

    dialogRef.afterClosed().subscribe(
      (data: any) => {
        this.neopixelDataSource.loadNeopixels();
      }
    )
  }

  openPixelColorDialog() {
    const dialogRef = this.pixelColorDialog.open(PixelColorDialogComponent);
  }

}
