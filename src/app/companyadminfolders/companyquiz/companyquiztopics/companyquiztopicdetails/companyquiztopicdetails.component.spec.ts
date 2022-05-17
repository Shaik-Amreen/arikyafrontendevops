import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyquiztopicdetailsComponent } from './companyquiztopicdetails.component';

describe('CompanyquiztopicdetailsComponent', () => {
  let component: CompanyquiztopicdetailsComponent;
  let fixture: ComponentFixture<CompanyquiztopicdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyquiztopicdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyquiztopicdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
