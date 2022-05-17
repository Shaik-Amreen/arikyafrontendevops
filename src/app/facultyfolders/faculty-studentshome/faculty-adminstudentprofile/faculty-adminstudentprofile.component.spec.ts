import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAdminstudentprofileComponent } from './faculty-adminstudentprofile.component';

describe('FacultyAdminstudentprofileComponent', () => {
  let component: FacultyAdminstudentprofileComponent;
  let fixture: ComponentFixture<FacultyAdminstudentprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyAdminstudentprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAdminstudentprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
