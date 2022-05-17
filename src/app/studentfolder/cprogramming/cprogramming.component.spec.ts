import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CprogrammingComponent } from './cprogramming.component';

describe('CprogrammingComponent', () => {
  let component: CprogrammingComponent;
  let fixture: ComponentFixture<CprogrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CprogrammingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CprogrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
