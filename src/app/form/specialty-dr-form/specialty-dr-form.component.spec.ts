import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtyDrFormComponent } from './specialty-dr-form.component';

describe('SpecialtyDrFormComponent', () => {
  let component: SpecialtyDrFormComponent;
  let fixture: ComponentFixture<SpecialtyDrFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialtyDrFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtyDrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
