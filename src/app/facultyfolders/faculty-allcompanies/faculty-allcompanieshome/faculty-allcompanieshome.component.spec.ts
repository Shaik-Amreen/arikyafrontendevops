import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAllcompanieshomeComponent } from './faculty-allcompanieshome.component';

describe('FacultyAllcompanieshomeComponent', () => {
  let component: FacultyAllcompanieshomeComponent;
  let fixture: ComponentFixture<FacultyAllcompanieshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyAllcompanieshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAllcompanieshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
