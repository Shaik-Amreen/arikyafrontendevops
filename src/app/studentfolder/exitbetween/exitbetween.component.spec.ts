import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitbetweenComponent } from './exitbetween.component';

describe('ExitbetweenComponent', () => {
  let component: ExitbetweenComponent;
  let fixture: ComponentFixture<ExitbetweenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitbetweenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitbetweenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
