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

  color = '#FF0000';
  neoPixelId: number;
  pixelIndex: number;

  // TODO: Pass pixel object in.
  constructor(
    private neoPixelService: NeopixelService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data)
    this.neoPixelId = this.data.neoPixelId;
    this.pixelIndex = this.data.pixelIndex;
  }

  updatePixel(evt: string) {
    console.log(this.neoPixelId, this.pixelIndex, evt);
    let rgb = this.rgbToDecimalArray(evt);
    let newPixel = new Pixel(this.neoPixelId, this.pixelIndex, rgb);
    this.neoPixelService.updatePixel(newPixel).subscribe(
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
