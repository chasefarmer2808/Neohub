import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddNeopixelDialogComponent } from './add-neopixel-dialog/add-neopixel-dialog.component';
import { PixelColorDialogComponent } from './pixel-color-dialog/pixel-color-dialog.component';

import { NeopixelService } from 'src/app/services/neopixel/neopixel.service';
import { AnimationService } from '../services/animation/animation.service';

import { NeopixelDataSource } from 'src/app/services/neopixel/neopixel-data-source';

import { Neopixel } from 'src/app/services/neopixel/neopixel';
import { BLACK } from '../services/neopixel/pixel';

@Component({
  selector: 'app-neopixel',
  templateUrl: './neopixel.component.html',
  styleUrls: ['./neopixel.component.css', '../app.component.css']
})
export class NeopixelComponent implements OnInit {

  neopixels: Neopixel[];
  neopixelDataSource: NeopixelDataSource;
  selectedAnimIndex: number = 0;

  constructor(private addNeopixelDialog: MatDialog,
              private pixelColorDialog: MatDialog, 
              private neopixelService: NeopixelService,
              private animationService: AnimationService) { }

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

  toggleAnimation(neopixelId: number, animation: string, animIndex: number) {
    this.animationService.toggleAnimation(neopixelId, animation).subscribe(
      (data) => {
        console.log(data);
        this.selectedAnimIndex = animIndex;
        this.neopixels[neopixelId].animating = !this.neopixels[neopixelId].animating;
      },
      (err) => {
        console.error(err);
      }
    )
  }

  openAddNeopixelDialog() {
    const dialogRef = this.addNeopixelDialog.open(AddNeopixelDialogComponent);

    dialogRef.afterClosed().subscribe(
      (data: any) => {
        this.neopixelDataSource.loadNeopixels();
      }
    )
  }

  openPixelColorDialog(neopixelId: number, pixelIndex: number) {
    const dialogRef = this.pixelColorDialog.open(PixelColorDialogComponent,
      { 
        data: {
          pixelRef: this.neopixels[neopixelId].pixels[pixelIndex]
        }
      });
  }

  deleteNeopixel(neopixel: Neopixel) {
    this.neopixelService.deleteNeopixel(neopixel._id).subscribe(
      (data) => {
        console.log(data);
        this.neopixelDataSource.loadNeopixels();
        this.spliceNeopixel(neopixel);
      },
      (err) => {
        console.error(err);
      }
    )
  }

  spliceNeopixel(neopixel: Neopixel) {
    const index: number = this.neopixels.indexOf(neopixel);

    if (index !== -1) {
      this.neopixels.splice(index, 1);
    }
  }

  decimalArrayToRGB(colors: number[]): string {
    return `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
  }

  fillNeopixel(id, color) {
    for (let pixel of this.neopixels[id].pixels) {
      pixel.color = color;
    }
  }

}
