import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyCampusplacementesreportsComponent } from './faculty-campusplacementesreports.component';

describe('FacultyCampusplacementesreportsComponent', () => {
  let component: FacultyCampusplacementesreportsComponent;
  let fixture: ComponentFixture<FacultyCampusplacementesreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyCampusplacementesreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyCampusplacementesreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
