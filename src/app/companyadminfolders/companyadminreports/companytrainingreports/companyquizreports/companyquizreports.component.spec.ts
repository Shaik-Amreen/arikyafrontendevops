import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyquizreportsComponent } from './companyquizreports.component';

describe('CompanyquizreportsComponent', () => {
  let component: CompanyquizreportsComponent;
  let fixture: ComponentFixture<CompanyquizreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyquizreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyquizreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
