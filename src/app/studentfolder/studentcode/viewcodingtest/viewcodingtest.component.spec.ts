import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcodingtestComponent } from './viewcodingtest.component';

describe('ViewcodingtestComponent', () => {
  let component: ViewcodingtestComponent;
  let fixture: ComponentFixture<ViewcodingtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcodingtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcodingtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
