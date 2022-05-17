import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizadmintopicsComponent } from './quizadmintopics.component';

describe('QuizadmintopicsComponent', () => {
  let component: QuizadmintopicsComponent;
  let fixture: ComponentFixture<QuizadmintopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizadmintopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizadmintopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
