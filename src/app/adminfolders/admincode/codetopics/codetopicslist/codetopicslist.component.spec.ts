import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodetopicslistComponent } from './codetopicslist.component';

describe('CodetopicslistComponent', () => {
  let component: CodetopicslistComponent;
  let fixture: ComponentFixture<CodetopicslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodetopicslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodetopicslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
