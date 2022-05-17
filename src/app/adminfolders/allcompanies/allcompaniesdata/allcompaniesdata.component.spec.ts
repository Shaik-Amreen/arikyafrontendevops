import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcompaniesdataComponent } from './allcompaniesdata.component';

describe('AllcompaniesdataComponent', () => {
  let component: AllcompaniesdataComponent;
  let fixture: ComponentFixture<AllcompaniesdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcompaniesdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcompaniesdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
