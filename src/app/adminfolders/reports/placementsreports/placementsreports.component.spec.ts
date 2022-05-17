import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementsreportsComponent } from './placementsreports.component';

describe('PlacementsreportsComponent', () => {
  let component: PlacementsreportsComponent;
  let fixture: ComponentFixture<PlacementsreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementsreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementsreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
