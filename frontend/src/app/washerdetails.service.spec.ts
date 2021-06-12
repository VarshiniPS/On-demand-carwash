import { TestBed } from '@angular/core/testing';

import { WasherdetailsService } from './washerdetails.service';

describe('WasherdetailsService', () => {
  let service: WasherdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WasherdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
