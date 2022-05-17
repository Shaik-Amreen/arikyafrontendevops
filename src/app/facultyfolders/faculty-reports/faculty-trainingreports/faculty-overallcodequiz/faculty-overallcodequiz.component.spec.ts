import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyOverallcodequizComponent } from './faculty-overallcodequiz.component';

describe('FacultyOverallcodequizComponent', () => {
  let component: FacultyOverallcodequizComponent;
  let fixture: ComponentFixture<FacultyOverallcodequizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyOverallcodequizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyOverallcodequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
