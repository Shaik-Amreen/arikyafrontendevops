import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyCodetopicslistComponent } from './faculty-codetopicslist.component';

describe('FacultyCodetopicslistComponent', () => {
  let component: FacultyCodetopicslistComponent;
  let fixture: ComponentFixture<FacultyCodetopicslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyCodetopicslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyCodetopicslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
