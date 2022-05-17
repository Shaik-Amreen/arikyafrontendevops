import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusplacementreportsComponent } from './campusplacementreports.component';

describe('CampusplacementreportsComponent', () => {
  let component: CampusplacementreportsComponent;
  let fixture: ComponentFixture<CampusplacementreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusplacementreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusplacementreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
