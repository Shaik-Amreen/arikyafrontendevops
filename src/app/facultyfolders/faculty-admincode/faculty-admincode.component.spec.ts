import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAdmincodeComponent } from './faculty-admincode.component';

describe('FacultyAdmincodeComponent', () => {
  let component: FacultyAdmincodeComponent;
  let fixture: ComponentFixture<FacultyAdmincodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyAdmincodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAdmincodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
