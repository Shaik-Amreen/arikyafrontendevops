import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentfolderComponent } from './studentfolder.component';

describe('StudentfolderComponent', () => {
  let component: StudentfolderComponent;
  let fixture: ComponentFixture<StudentfolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentfolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentfolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
