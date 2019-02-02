import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { AddNeopixelDialogComponent } from './add-neopixel-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NeopixelService } from 'src/app/services/neopixel/neopixel.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('AddNeopixelDialogComponent', () => {
  let component: AddNeopixelDialogComponent;
  let fixture: ComponentFixture<AddNeopixelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNeopixelDialogComponent ],
      providers: [ 
        NeopixelService,
        {
          provide: MatDialogRef,
          useValue: {}
        },
        {
          provide: MAT_DIALOG_DATA, 
          useValue: {}
        }
      ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNeopixelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
