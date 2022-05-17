import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingtopicsComponent } from './codingtopics.component';

describe('CodingtopicsComponent', () => {
  let component: CodingtopicsComponent;
  let fixture: ComponentFixture<CodingtopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingtopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingtopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
