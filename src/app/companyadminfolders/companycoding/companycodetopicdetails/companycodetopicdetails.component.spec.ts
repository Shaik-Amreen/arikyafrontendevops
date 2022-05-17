import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycodetopicdetailsComponent } from './companycodetopicdetails.component';

describe('CompanycodetopicdetailsComponent', () => {
  let component: CompanycodetopicdetailsComponent;
  let fixture: ComponentFixture<CompanycodetopicdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanycodetopicdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanycodetopicdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
