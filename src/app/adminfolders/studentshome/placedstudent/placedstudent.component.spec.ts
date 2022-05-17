import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacedstudentComponent } from './placedstudent.component';

describe('PlacedstudentComponent', () => {
  let component: PlacedstudentComponent;
  let fixture: ComponentFixture<PlacedstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacedstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacedstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
