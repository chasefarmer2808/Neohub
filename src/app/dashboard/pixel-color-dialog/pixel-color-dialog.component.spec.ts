import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorPickerModule } from 'ngx-color-picker';
import { HttpClientModule } from '@angular/common/http';

import { PixelColorDialogComponent } from './pixel-color-dialog.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { NeopixelService } from 'src/app/services/neopixel/neopixel.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NeopixelsMock } from 'src/app/services/neopixel/neopixels.mock';

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
          useValue: {
            pixelRef: NeopixelsMock[0].pixels[0]
          }
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

    expect(res).toEqual([0, 0, 0])
  });

  it('should call the update pixel function when the ok button is clicked', () => {

  });

  it('should be set to the selected pixel\'s color when initialized', () => {

  });
});
