import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyCodereportComponent } from './faculty-codereport.component';

describe('FacultyCodereportComponent', () => {
  let component: FacultyCodereportComponent;
  let fixture: ComponentFixture<FacultyCodereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyCodereportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyCodereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
