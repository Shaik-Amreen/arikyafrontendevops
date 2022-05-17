import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyalldetailsComponent } from './companyalldetails.component';

describe('CompanyalldetailsComponent', () => {
  let component: CompanyalldetailsComponent;
  let fixture: ComponentFixture<CompanyalldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyalldetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyalldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
