import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemotestudentComponent } from './demotestudent.component';

describe('DemotestudentComponent', () => {
  let component: DemotestudentComponent;
  let fixture: ComponentFixture<DemotestudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemotestudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemotestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
