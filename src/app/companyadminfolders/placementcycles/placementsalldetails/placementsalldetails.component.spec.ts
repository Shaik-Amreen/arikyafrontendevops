import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementsalldetailsComponent } from './placementsalldetails.component';

describe('PlacementsalldetailsComponent', () => {
  let component: PlacementsalldetailsComponent;
  let fixture: ComponentFixture<PlacementsalldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementsalldetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementsalldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
