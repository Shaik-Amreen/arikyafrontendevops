import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycodereportsComponent } from './companycodereports.component';

describe('CompanycodereportsComponent', () => {
  let component: CompanycodereportsComponent;
  let fixture: ComponentFixture<CompanycodereportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanycodereportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanycodereportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
