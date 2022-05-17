import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAddeditquizComponent } from './faculty-addeditquiz.component';

describe('FacultyAddeditquizComponent', () => {
  let component: FacultyAddeditquizComponent;
  let fixture: ComponentFixture<FacultyAddeditquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyAddeditquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAddeditquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
