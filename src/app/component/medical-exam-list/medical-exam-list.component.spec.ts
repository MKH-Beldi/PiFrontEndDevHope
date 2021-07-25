import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalExamListComponent } from './medical-exam-list.component';

describe('MedicalExamListComponent', () => {
  let component: MedicalExamListComponent;
  let fixture: ComponentFixture<MedicalExamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalExamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalExamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
