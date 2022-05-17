import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodetopicdetailsComponent } from './codetopicdetails.component';

describe('CodetopicdetailsComponent', () => {
  let component: CodetopicdetailsComponent;
  let fixture: ComponentFixture<CodetopicdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodetopicdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodetopicdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
