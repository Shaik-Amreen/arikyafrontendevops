import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultySearchstudentComponent } from './faculty-searchstudent.component';

describe('FacultySearchstudentComponent', () => {
  let component: FacultySearchstudentComponent;
  let fixture: ComponentFixture<FacultySearchstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultySearchstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultySearchstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
