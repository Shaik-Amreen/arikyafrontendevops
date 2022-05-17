import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcompletedquizzesComponent } from './viewcompletedquizzes.component';

describe('ViewcompletedquizzesComponent', () => {
  let component: ViewcompletedquizzesComponent;
  let fixture: ComponentFixture<ViewcompletedquizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcompletedquizzesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcompletedquizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
