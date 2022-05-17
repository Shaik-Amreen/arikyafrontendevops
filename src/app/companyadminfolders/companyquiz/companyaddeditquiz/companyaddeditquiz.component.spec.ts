import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyaddeditquizComponent } from './companyaddeditquiz.component';

describe('CompanyaddeditquizComponent', () => {
  let component: CompanyaddeditquizComponent;
  let fixture: ComponentFixture<CompanyaddeditquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyaddeditquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyaddeditquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
