import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNeopixelDialogComponent } from './add-neopixel-dialog.component';

describe('AddNeopixelDialogComponent', () => {
  let component: AddNeopixelDialogComponent;
  let fixture: ComponentFixture<AddNeopixelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNeopixelDialogComponent ]
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
