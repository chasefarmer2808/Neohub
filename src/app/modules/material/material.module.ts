import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, 
        MatIconModule, 
        MatDialogModule,
        MatFormFieldModule, 
        MatSelectModule,
        MatOptionModule,
        MatInputModule,
        MatCardModule,
        MatMenuModule,
        MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatCheckboxModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
