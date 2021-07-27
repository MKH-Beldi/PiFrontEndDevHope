import { TestBed } from '@angular/core/testing';

import { MedicalExamService } from './medical-exam.service';

describe('MedicalExamService', () => {
  let service: MedicalExamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
