import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyPlacementshomeComponent } from './faculty-placementshome.component';

describe('FacultyPlacementshomeComponent', () => {
  let component: FacultyPlacementshomeComponent;
  let fixture: ComponentFixture<FacultyPlacementshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyPlacementshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyPlacementshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
