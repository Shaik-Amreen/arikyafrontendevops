import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementshomeComponent } from './placementshome.component';

describe('PlacementshomeComponent', () => {
  let component: PlacementshomeComponent;
  let fixture: ComponentFixture<PlacementshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
