import { TestBed } from '@angular/core/testing';

import { MybookingsService } from './mybookings.service';

describe('MybookingsService', () => {
  let service: MybookingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MybookingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
