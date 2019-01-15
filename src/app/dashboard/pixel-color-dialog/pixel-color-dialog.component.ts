import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NeopixelService } from 'src/app/services/neopixel/neopixel.service';

@Component({
  selector: 'app-pixel-color-dialog',
  templateUrl: './pixel-color-dialog.component.html',
  styleUrls: ['./pixel-color-dialog.component.css',  '../../app.component.css']
})
export class PixelColorDialogComponent implements OnInit {

  color = '#FF0000';
  neoPixelId: number;
  pixelIndex: number;

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
  }

  rgbToDecimalArray(rgbColor: string): string[] { 
    let res = rgbColor.replace(/\s/g, "").replace(/rgb\(/g, "").replace(/\)/g, "").split(',');
    return res;
  }

}
