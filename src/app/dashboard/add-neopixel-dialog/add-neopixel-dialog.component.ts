import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NeopixelService } from 'src/app/services/neopixel/neopixel.service';

@Component({
  selector: 'app-add-neopixel-dialog',
  templateUrl: './add-neopixel-dialog.component.html',
  styleUrls: ['./add-neopixel-dialog.component.css', '../../app.component.css']
})
export class AddNeopixelDialogComponent implements OnInit {

  addNeopixelForm: FormGroup;
  pixelTypeOptions: Array<string> = ['Strip', 'Ring', 'Matrix'];
  gpioPinOptions: Array<string> = ['10', '12', '18', '21'];

  constructor(
    public dialogRef: MatDialogRef<AddNeopixelDialogComponent>,
    private neoPixelService: NeopixelService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.createAddNeopixelForm(); 
  }

  createAddNeopixelForm() {
    this.addNeopixelForm = new FormGroup({
      pixelType: new FormControl(this.pixelTypeOptions[0], [Validators.required]),
      numPixels: new FormControl(64, [Validators.required, Validators.min(1)]),
      gpioPin: new FormControl(this.gpioPinOptions[2], [Validators.required]) // GPIO 18 is standard per the Circuit Python docs.
    });
  }

  addNeopixel() {
    this.neoPixelService.createNeopixel(this.addNeopixelForm.value)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.dialogRef.close();
        },
        (err: any) => {
          console.error('Error adding neopixel: ', err);
        });
  }

}
