import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAdminquizComponent } from './faculty-adminquiz.component';

describe('FacultyAdminquizComponent', () => {
  let component: FacultyAdminquizComponent;
  let fixture: ComponentFixture<FacultyAdminquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyAdminquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAdminquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
