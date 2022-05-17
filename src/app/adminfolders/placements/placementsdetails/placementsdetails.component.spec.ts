import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementsdetailsComponent } from './placementsdetails.component';

describe('PlacementsdetailsComponent', () => {
  let component: PlacementsdetailsComponent;
  let fixture: ComponentFixture<PlacementsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
