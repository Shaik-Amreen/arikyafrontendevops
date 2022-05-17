import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyPlacementsdetailsComponent } from './faculty-placementsdetails.component';

describe('FacultyPlacementsdetailsComponent', () => {
  let component: FacultyPlacementsdetailsComponent;
  let fixture: ComponentFixture<FacultyPlacementsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyPlacementsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyPlacementsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
