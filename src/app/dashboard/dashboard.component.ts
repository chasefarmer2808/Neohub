import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddNeopixelDialogComponent } from './add-neopixel-dialog/add-neopixel-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../app.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private addNeopixelDialog: MatDialog) { }

  ngOnInit() {
  }

  openAddNeopixelDialog() {
    this.addNeopixelDialog.open(AddNeopixelDialogComponent);
  }

}
