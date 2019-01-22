import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorPickerModule } from 'ngx-color-picker';
import { HttpClientModule } from '@angular/common/http';

import { PixelColorDialogComponent } from './pixel-color-dialog.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { NeopixelService } from 'src/app/services/neopixel/neopixel.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('PixelColorDialogComponent', () => {
  let component: PixelColorDialogComponent;
  let fixture: ComponentFixture<PixelColorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixelColorDialogComponent ],
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
        ColorPickerModule,
        HttpClientModule,
        MaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixelColorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert rgb string to decimal array', () => {
    let testString = 'rgb(0, 0, 0)';

    let res = component.rgbToDecimalArray(testString);

    expect(res).toEqual(['0', '0', '0'])
  })
});
