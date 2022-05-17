import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyCodetopicsComponent } from './faculty-codetopics.component';

describe('FacultyCodetopicsComponent', () => {
  let component: FacultyCodetopicsComponent;
  let fixture: ComponentFixture<FacultyCodetopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyCodetopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyCodetopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
