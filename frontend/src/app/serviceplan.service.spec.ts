import { TestBed } from '@angular/core/testing';

import { ServiceplanService } from './serviceplan.service';

describe('ServiceplanService', () => {
  let service: ServiceplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
