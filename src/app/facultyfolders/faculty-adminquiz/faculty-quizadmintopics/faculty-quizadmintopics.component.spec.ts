import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyQuizadmintopicsComponent } from './faculty-quizadmintopics.component';

describe('FacultyQuizadmintopicsComponent', () => {
  let component: FacultyQuizadmintopicsComponent;
  let fixture: ComponentFixture<FacultyQuizadmintopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyQuizadmintopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyQuizadmintopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
