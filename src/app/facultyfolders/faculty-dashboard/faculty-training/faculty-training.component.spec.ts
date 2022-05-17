import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyTrainingComponent } from './faculty-training.component';

describe('FacultyTrainingComponent', () => {
  let component: FacultyTrainingComponent;
  let fixture: ComponentFixture<FacultyTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
