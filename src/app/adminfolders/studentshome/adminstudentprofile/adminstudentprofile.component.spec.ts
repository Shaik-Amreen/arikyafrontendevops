import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstudentprofileComponent } from './adminstudentprofile.component';

describe('AdminstudentprofileComponent', () => {
  let component: AdminstudentprofileComponent;
  let fixture: ComponentFixture<AdminstudentprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminstudentprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstudentprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
