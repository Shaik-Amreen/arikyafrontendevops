import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyQuiztopicdetailsComponent } from './faculty-quiztopicdetails.component';

describe('FacultyQuiztopicdetailsComponent', () => {
  let component: FacultyQuiztopicdetailsComponent;
  let fixture: ComponentFixture<FacultyQuiztopicdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyQuiztopicdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyQuiztopicdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
