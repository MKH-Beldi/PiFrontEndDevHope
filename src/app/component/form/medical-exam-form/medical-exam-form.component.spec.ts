import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalExamFormComponent } from './medical-exam-form.component';

describe('MedicalExamFormComponent', () => {
  let component: MedicalExamFormComponent;
  let fixture: ComponentFixture<MedicalExamFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalExamFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalExamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
