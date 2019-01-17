import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { NeopixelService } from './neopixel.service';

describe('NeopixelService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [NeopixelService],
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: NeopixelService = TestBed.get(NeopixelService);
    expect(service).toBeTruthy();
  });
});
