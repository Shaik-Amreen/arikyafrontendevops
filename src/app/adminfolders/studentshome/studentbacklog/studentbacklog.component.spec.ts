import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentbacklogComponent } from './studentbacklog.component';

describe('StudentbacklogComponent', () => {
  let component: StudentbacklogComponent;
  let fixture: ComponentFixture<StudentbacklogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentbacklogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentbacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
