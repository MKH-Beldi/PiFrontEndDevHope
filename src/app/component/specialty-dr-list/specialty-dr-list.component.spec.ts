import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtyDrListComponent } from './specialty-dr-list.component';

describe('SpecialtyDrListComponent', () => {
  let component: SpecialtyDrListComponent;
  let fixture: ComponentFixture<SpecialtyDrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialtyDrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtyDrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
