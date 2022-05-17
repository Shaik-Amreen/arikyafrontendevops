import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAllcompaniesComponent } from './faculty-allcompanies.component';

describe('FacultyAllcompaniesComponent', () => {
  let component: FacultyAllcompaniesComponent;
  let fixture: ComponentFixture<FacultyAllcompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyAllcompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAllcompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
