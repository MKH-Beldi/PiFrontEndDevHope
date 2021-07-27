import { TestBed } from '@angular/core/testing';

import { FileMedicalExamService } from './file-medical-exam.service';

describe('FileMedicalExamService', () => {
  let service: FileMedicalExamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileMedicalExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
