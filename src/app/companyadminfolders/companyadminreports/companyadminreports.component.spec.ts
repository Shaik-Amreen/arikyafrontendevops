import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyadminreportsComponent } from './companyadminreports.component';

describe('CompanyadminreportsComponent', () => {
  let component: CompanyadminreportsComponent;
  let fixture: ComponentFixture<CompanyadminreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyadminreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyadminreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
