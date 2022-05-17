import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiztopicsComponent } from './quiztopics.component';

describe('QuiztopicsComponent', () => {
  let component: QuiztopicsComponent;
  let fixture: ComponentFixture<QuiztopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiztopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiztopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
