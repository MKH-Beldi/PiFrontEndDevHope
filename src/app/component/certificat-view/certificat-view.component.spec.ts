import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatViewComponent } from './certificat-view.component';

describe('CertificatViewComponent', () => {
  let component: CertificatViewComponent;
  let fixture: ComponentFixture<CertificatViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificatViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
