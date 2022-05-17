import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAddeditcodeComponent } from './faculty-addeditcode.component';

describe('FacultyAddeditcodeComponent', () => {
  let component: FacultyAddeditcodeComponent;
  let fixture: ComponentFixture<FacultyAddeditcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyAddeditcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAddeditcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
