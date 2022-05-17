import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcodeComponent } from './studentcode.component';

describe('StudentcodeComponent', () => {
  let component: StudentcodeComponent;
  let fixture: ComponentFixture<StudentcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
