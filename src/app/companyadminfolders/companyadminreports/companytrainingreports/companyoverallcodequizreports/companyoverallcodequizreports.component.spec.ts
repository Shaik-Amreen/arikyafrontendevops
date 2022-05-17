import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyoverallcodequizreportsComponent } from './companyoverallcodequizreports.component';

describe('CompanyoverallcodequizreportsComponent', () => {
  let component: CompanyoverallcodequizreportsComponent;
  let fixture: ComponentFixture<CompanyoverallcodequizreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyoverallcodequizreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyoverallcodequizreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
