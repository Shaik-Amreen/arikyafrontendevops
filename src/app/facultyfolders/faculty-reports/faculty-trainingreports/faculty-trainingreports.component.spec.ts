import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyTrainingreportsComponent } from './faculty-trainingreports.component';

describe('FacultyTrainingreportsComponent', () => {
  let component: FacultyTrainingreportsComponent;
  let fixture: ComponentFixture<FacultyTrainingreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyTrainingreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyTrainingreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
