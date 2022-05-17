import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAllcompaniesdataComponent } from './faculty-allcompaniesdata.component';

describe('FacultyAllcompaniesdataComponent', () => {
  let component: FacultyAllcompaniesdataComponent;
  let fixture: ComponentFixture<FacultyAllcompaniesdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyAllcompaniesdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAllcompaniesdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
