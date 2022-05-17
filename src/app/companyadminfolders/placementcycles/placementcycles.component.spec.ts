import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementcyclesComponent } from './placementcycles.component';

describe('PlacementcyclesComponent', () => {
  let component: PlacementcyclesComponent;
  let fixture: ComponentFixture<PlacementcyclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementcyclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementcyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
