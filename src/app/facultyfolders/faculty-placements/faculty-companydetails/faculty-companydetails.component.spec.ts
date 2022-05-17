import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyCompanydetailsComponent } from './faculty-companydetails.component';

describe('FacultyCompanydetailsComponent', () => {
  let component: FacultyCompanydetailsComponent;
  let fixture: ComponentFixture<FacultyCompanydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyCompanydetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyCompanydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
