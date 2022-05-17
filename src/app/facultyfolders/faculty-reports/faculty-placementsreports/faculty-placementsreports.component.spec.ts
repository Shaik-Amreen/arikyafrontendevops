import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyPlacementsreportsComponent } from './faculty-placementsreports.component';

describe('FacultyPlacementsreportsComponent', () => {
  let component: FacultyPlacementsreportsComponent;
  let fixture: ComponentFixture<FacultyPlacementsreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyPlacementsreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyPlacementsreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
