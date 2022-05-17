import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyCodetopicdetailsComponent } from './faculty-codetopicdetails.component';

describe('FacultyCodetopicdetailsComponent', () => {
  let component: FacultyCodetopicdetailsComponent;
  let fixture: ComponentFixture<FacultyCodetopicdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyCodetopicdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyCodetopicdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
