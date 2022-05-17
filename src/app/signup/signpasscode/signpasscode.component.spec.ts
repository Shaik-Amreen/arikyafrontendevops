import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignpasscodeComponent } from './signpasscode.component';

describe('SignpasscodeComponent', () => {
  let component: SignpasscodeComponent;
  let fixture: ComponentFixture<SignpasscodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignpasscodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignpasscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
