import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotestudentComponent } from './promotestudent.component';

describe('PromotestudentComponent', () => {
  let component: PromotestudentComponent;
  let fixture: ComponentFixture<PromotestudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotestudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
