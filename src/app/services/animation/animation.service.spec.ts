import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { AnimationService } from './animation.service';

describe('AnimationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [AnimationService],
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: AnimationService = TestBed.get(AnimationService);
    expect(service).toBeTruthy();
  });
});
