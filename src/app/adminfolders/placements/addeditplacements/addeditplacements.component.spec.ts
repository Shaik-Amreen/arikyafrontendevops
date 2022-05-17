import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditplacementsComponent } from './addeditplacements.component';

describe('AddeditplacementsComponent', () => {
  let component: AddeditplacementsComponent;
  let fixture: ComponentFixture<AddeditplacementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditplacementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditplacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
