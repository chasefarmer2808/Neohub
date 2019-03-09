import { Component, OnInit, Output, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NeopixelService } from 'src/app/services/neopixel/neopixel.service';
import { Pixel } from 'src/app/services/neopixel/pixel';

@Component({
  selector: 'app-pixel-color-dialog',
  templateUrl: './pixel-color-dialog.component.html',
  styleUrls: ['./pixel-color-dialog.component.css',  '../../app.component.css']
})
export class PixelColorDialogComponent implements OnInit {

  selectedPixel: Pixel;
  color: string;

  constructor(
    private neoPixelService: NeopixelService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log('DATA: ', this.data)
    this.selectedPixel = this.data.pixelRef;
    this.color = this.decimalArrayToRGB(this.selectedPixel.color);
  }

  updatePixel(evt: string) {
    let rgb = this.rgbToDecimalArray(evt);
    
    this.neoPixelService.updatePixel(this.selectedPixel, rgb).subscribe(
      (data) => {
        this.selectedPixel.color = rgb;
        console.log(data);
      },
      (err) => {
        console.error(err);
      }
    )
  }

  rgbToDecimalArray(rgbColor: string): number[] {
    // TODO: Replace with regex. 
    let rgbVals = rgbColor.replace(/\s/g, "").replace(/rgb\(/g, "").replace(/\)/g, "").split(',');
    let res = rgbVals.map(val => {
      return parseInt(val);
    })
    return res;
  }

  decimalArrayToRGB(colors: number[]): string {
    return `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
  }

}
