import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pixel-color-dialog',
  templateUrl: './pixel-color-dialog.component.html',
  styleUrls: ['./pixel-color-dialog.component.css',  '../../app.component.css']
})
export class PixelColorDialogComponent implements OnInit {

  color = '#FF0000';

  constructor() { }

  ngOnInit() {
  }

}
