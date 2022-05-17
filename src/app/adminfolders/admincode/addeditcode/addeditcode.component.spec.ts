import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditcodeComponent } from './addeditcode.component';

describe('AddeditcodeComponent', () => {
  let component: AddeditcodeComponent;
  let fixture: ComponentFixture<AddeditcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
