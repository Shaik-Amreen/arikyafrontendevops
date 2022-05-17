import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyaddeditcodeComponent } from './companyaddeditcode.component';

describe('CompanyaddeditcodeComponent', () => {
  let component: CompanyaddeditcodeComponent;
  let fixture: ComponentFixture<CompanyaddeditcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyaddeditcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyaddeditcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
