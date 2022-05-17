import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAdminprofileComponent } from './faculty-adminprofile.component';

describe('FacultyAdminprofileComponent', () => {
  let component: FacultyAdminprofileComponent;
  let fixture: ComponentFixture<FacultyAdminprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyAdminprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAdminprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
