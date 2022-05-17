import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementsdashboardComponent } from './placementsdashboard.component';

describe('PlacementsdashboardComponent', () => {
  let component: PlacementsdashboardComponent;
  let fixture: ComponentFixture<PlacementsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementsdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
