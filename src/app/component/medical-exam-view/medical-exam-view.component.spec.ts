import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalExamViewComponent } from './medical-exam-view.component';

describe('MedicalExamViewComponent', () => {
  let component: MedicalExamViewComponent;
  let fixture: ComponentFixture<MedicalExamViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalExamViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalExamViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
