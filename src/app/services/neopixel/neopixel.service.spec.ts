import { TestBed } from '@angular/core/testing';

import { NeopixelService } from './neopixel.service';

describe('NeopixelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NeopixelService = TestBed.get(NeopixelService);
    expect(service).toBeTruthy();
  });
});
