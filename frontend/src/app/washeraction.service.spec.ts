import { TestBed } from '@angular/core/testing';

import { WasheractionService } from './washeraction.service';

describe('WasheractionService', () => {
  let service: WasheractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WasheractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
