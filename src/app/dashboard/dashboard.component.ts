import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddNeopixelDialogComponent } from './add-neopixel-dialog/add-neopixel-dialog.component';

import { NeopixelService } from 'src/app/services/neopixel/neopixel.service';

import { Neopixel } from 'src/app/services/neopixel/neopixel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../app.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private addNeopixelDialog: MatDialog, private neopixelService: NeopixelService) { }

  ngOnInit() {
    this.neopixelService.getNeopixels().subscribe(
      (neopixels: Neopixel[]) => {
        console.log(neopixels);
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
        this.neopixelService.getNeopixels().subscribe(
          (neopixels: Neopixel[]) => {
            console.log(neopixels);
          },
          (err) => {
            console.error(err);
          }
        )
      }
    )
  }

}
