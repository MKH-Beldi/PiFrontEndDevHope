import { TestBed } from '@angular/core/testing';

import { SpecialtyDrService } from './specialty-dr.service';

describe('SpecialtyDrService', () => {
  let service: SpecialtyDrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialtyDrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
