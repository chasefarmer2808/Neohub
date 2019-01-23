import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { DashboardComponent } from './dashboard.component';
import { AddNeopixelDialogComponent } from './add-neopixel-dialog/add-neopixel-dialog.component';

import { NeopixelService } from '../services/neopixel/neopixel.service';

import { NeopixelsMock } from '../services/neopixel/neopixels.mock';
import { By } from '@angular/platform-browser';
import { BLACK } from '../services/neopixel/pixel';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let de: DebugElement;
  let neopixelService: NeopixelService;
  let getNeopixelSpy: any;
  let clearNeopixelSpy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, AddNeopixelDialogComponent ],
      providers: [ 
        NeopixelService,
      ],
      imports: [
        MaterialModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    neopixelService = de.injector.get(NeopixelService);

    getNeopixelSpy = spyOn(neopixelService, 'getNeopixels')
                      .and.returnValue(of(NeopixelsMock));
    clearNeopixelSpy = spyOn(neopixelService, 'clearNeopixel')
                        .and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should instantiate a neopixel data source', () => {
    expect(component.neopixelDataSource).toBeTruthy();
  });

  it('should instantiate the neopixel service', () => {
    expect(neopixelService).toBeTruthy();
  });

  it('should subscribe to the neopixel data source on init', () => {
    fixture.whenStable().then(() => {
      expect(getNeopixelSpy).toHaveBeenCalled();
    }) 
  });

  it('should update the neopixel array on init', () => {
    fixture.whenStable().then(() => {
      expect(component.neopixels.length).toEqual(NeopixelsMock.length);
    });
  });

  it('pixel button should have initial background color', () => {
    let pixelButton: any;

    fixture.whenRenderingDone().then(() => {
      pixelButton = de.query(By.css('#pixel')).nativeElement;
      expect(pixelButton.style.backgroundColor).toEqual('rgb(255, 255, 255)');
    });
  });

  it('should update background color after updating a pixel color', () => {
    let pixelButton: any;

    fixture.whenStable().then(() => {
      component.neopixels[0].pixels[0].color = [123, 123, 123];

      fixture.detectChanges();

      fixture.whenRenderingDone().then(() => {
        pixelButton = de.query(By.css('#pixel')).nativeElement;
        expect(pixelButton.style.backgroundColor).toEqual('rgb(123, 123, 123)');
      });
    });
  })

  it('should call the clearNeopixel service function with the appropriate neopixel id', () => {
    component.clearNeopixel(0)
    
    fixture.whenRenderingDone().then(() => {
      expect(clearNeopixelSpy).toHaveBeenCalledWith(0);
    }) 
  });

  it('should set all background colors to black', () => {
    let pixelButton: any;

    component.fillNeopixel(0, BLACK);
    fixture.detectChanges();
    
    fixture.whenRenderingDone().then(() => {
      pixelButton = de.query(By.css('#pixel')).nativeElement;
      expect(pixelButton.style.backgroundColor).toEqual('rgb(0, 0, 0)');
    });
  });
});
