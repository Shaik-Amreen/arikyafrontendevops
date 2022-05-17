import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyCalendarComponent } from './faculty-calendar.component';

describe('FacultyCalendarComponent', () => {
  let component: FacultyCalendarComponent;
  let fixture: ComponentFixture<FacultyCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
