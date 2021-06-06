import { TestBed } from '@angular/core/testing';

import { CustomersignupService } from './customersignup.service';

describe('CustomersignupService', () => {
  let service: CustomersignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
