import { TestBed } from '@angular/core/testing';

import { PersonaldetailService } from './personaldetail.service';

describe('PersonaldetailService', () => {
  let service: PersonaldetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaldetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
