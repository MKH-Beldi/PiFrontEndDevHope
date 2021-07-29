import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileMedicalExamListComponent } from './file-medical-exam-list.component';

describe('FileMedicalExamListComponent', () => {
  let component: FileMedicalExamListComponent;
  let fixture: ComponentFixture<FileMedicalExamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileMedicalExamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileMedicalExamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
