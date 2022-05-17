import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyQuizreportComponent } from './faculty-quizreport.component';

describe('FacultyQuizreportComponent', () => {
  let component: FacultyQuizreportComponent;
  let fixture: ComponentFixture<FacultyQuizreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyQuizreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyQuizreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
