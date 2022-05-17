import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcompanyComponent } from './studentcompany.component';

describe('StudentcompanyComponent', () => {
  let component: StudentcompanyComponent;
  let fixture: ComponentFixture<StudentcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentcompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
