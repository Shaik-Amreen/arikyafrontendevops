import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallcodequizComponent } from './overallcodequiz.component';

describe('OverallcodequizComponent', () => {
  let component: OverallcodequizComponent;
  let fixture: ComponentFixture<OverallcodequizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallcodequizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallcodequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
