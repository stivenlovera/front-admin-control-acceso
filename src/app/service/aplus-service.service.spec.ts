import { TestBed } from '@angular/core/testing';

import { AplusServiceService } from './aplus-service.service';

describe('AplusServiceService', () => {
  let service: AplusServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AplusServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
