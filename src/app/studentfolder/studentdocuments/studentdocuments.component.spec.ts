import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdocumentsComponent } from './studentdocuments.component';

describe('StudentdocumentsComponent', () => {
  let component: StudentdocumentsComponent;
  let fixture: ComponentFixture<StudentdocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentdocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
