import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcompanieshomeComponent } from './allcompanieshome.component';

describe('AllcompanieshomeComponent', () => {
  let component: AllcompanieshomeComponent;
  let fixture: ComponentFixture<AllcompanieshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcompanieshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcompanieshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
