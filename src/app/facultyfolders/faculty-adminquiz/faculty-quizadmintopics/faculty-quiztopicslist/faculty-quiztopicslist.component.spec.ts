import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyQuiztopicslistComponent } from './faculty-quiztopicslist.component';

describe('FacultyQuiztopicslistComponent', () => {
  let component: FacultyQuiztopicslistComponent;
  let fixture: ComponentFixture<FacultyQuiztopicslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyQuiztopicslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyQuiztopicslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
