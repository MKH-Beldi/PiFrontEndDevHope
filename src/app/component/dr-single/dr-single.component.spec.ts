import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrSingleComponent } from './dr-single.component';

describe('DrSingleComponent', () => {
  let component: DrSingleComponent;
  let fixture: ComponentFixture<DrSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
