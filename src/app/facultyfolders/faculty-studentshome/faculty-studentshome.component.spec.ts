import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyStudentshomeComponent } from './faculty-studentshome.component';

describe('FacultyStudentshomeComponent', () => {
  let component: FacultyStudentshomeComponent;
  let fixture: ComponentFixture<FacultyStudentshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyStudentshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyStudentshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
