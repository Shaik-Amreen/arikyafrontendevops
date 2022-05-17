import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodetopicsComponent } from './codetopics.component';

describe('CodetopicsComponent', () => {
  let component: CodetopicsComponent;
  let fixture: ComponentFixture<CodetopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodetopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodetopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
