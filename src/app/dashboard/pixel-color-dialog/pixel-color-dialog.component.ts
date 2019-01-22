import { Component, OnInit, Output, Inject, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NeopixelService } from 'src/app/services/neopixel/neopixel.service';
import { Pixel } from 'src/app/services/neopixel/pixel';

@Component({
  selector: 'app-pixel-color-dialog',
  templateUrl: './pixel-color-dialog.component.html',
  styleUrls: ['./pixel-color-dialog.component.css',  '../../app.component.css']
})
export class PixelColorDialogComponent implements OnInit {

  color = '#FF0000';
  neoPixelId: number;
  pixelIndex: number;
  selectedPixel: Pixel;

  constructor(
    private neoPixelService: NeopixelService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data)
    this.selectedPixel = this.data.pixelRef;
  }

  updatePixel(evt: string) {
    let rgb = this.rgbToDecimalArray(evt);
    this.selectedPixel.color = rgb;
    console.log(this.selectedPixel);
    this.neoPixelService.updatePixel(this.selectedPixel).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.error(err);
      }
    )
  }

  rgbToDecimalArray(rgbColor: string): string[] {
    // TODO: Replace with regex. 
    let res = rgbColor.replace(/\s/g, "").replace(/rgb\(/g, "").replace(/\)/g, "").split(',');
    return res;
  }

}
