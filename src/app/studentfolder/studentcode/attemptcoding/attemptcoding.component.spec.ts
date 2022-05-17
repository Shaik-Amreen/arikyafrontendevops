import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttemptcodingComponent } from './attemptcoding.component';

describe('AttemptcodingComponent', () => {
  let component: AttemptcodingComponent;
  let fixture: ComponentFixture<AttemptcodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttemptcodingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttemptcodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
