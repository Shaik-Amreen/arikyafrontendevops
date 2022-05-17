import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyadmincalendarComponent } from './companyadmincalendar.component';

describe('CompanyadmincalendarComponent', () => {
  let component: CompanyadmincalendarComponent;
  let fixture: ComponentFixture<CompanyadmincalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyadmincalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyadmincalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
