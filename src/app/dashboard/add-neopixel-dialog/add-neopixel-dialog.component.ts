import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-neopixel-dialog',
  templateUrl: './add-neopixel-dialog.component.html',
  styleUrls: ['./add-neopixel-dialog.component.css']
})
export class AddNeopixelDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddNeopixelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
