import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyPlacementsComponent } from './faculty-placements.component';

describe('FacultyPlacementsComponent', () => {
  let component: FacultyPlacementsComponent;
  let fixture: ComponentFixture<FacultyPlacementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyPlacementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyPlacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
