import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelColorDialogComponent } from './pixel-color-dialog.component';

describe('PixelColorDialogComponent', () => {
  let component: PixelColorDialogComponent;
  let fixture: ComponentFixture<PixelColorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixelColorDialogComponent ]
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
});
