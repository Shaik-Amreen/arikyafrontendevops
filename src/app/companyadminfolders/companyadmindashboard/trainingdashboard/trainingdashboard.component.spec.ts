import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingdashboardComponent } from './trainingdashboard.component';

describe('TrainingdashboardComponent', () => {
  let component: TrainingdashboardComponent;
  let fixture: ComponentFixture<TrainingdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
