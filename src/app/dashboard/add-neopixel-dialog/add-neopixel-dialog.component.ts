import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-neopixel-dialog',
  templateUrl: './add-neopixel-dialog.component.html',
  styleUrls: ['./add-neopixel-dialog.component.css']
})
export class AddNeopixelDialogComponent implements OnInit {

  addNeopixelForm: FormGroup;
  pixelTypeOptions: Array<string> = ['Strip', 'Ring', 'Matrix'];

  constructor(public dialogRef: MatDialogRef<AddNeopixelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.createAddNeopixelForm();
  }

  createAddNeopixelForm() {
    this.addNeopixelForm = new FormGroup({
      pixelType: new FormControl(this.pixelTypeOptions[0], [Validators.required])
    });
  }

}
