import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileMedicalExamFormComponent } from './file-medical-exam-form.component';

describe('FileMedicalExamFormComponent', () => {
  let component: FileMedicalExamFormComponent;
  let fixture: ComponentFixture<FileMedicalExamFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileMedicalExamFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileMedicalExamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
