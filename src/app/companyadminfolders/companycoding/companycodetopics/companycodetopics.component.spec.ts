import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycodetopicsComponent } from './companycodetopics.component';

describe('CompanycodetopicsComponent', () => {
  let component: CompanycodetopicsComponent;
  let fixture: ComponentFixture<CompanycodetopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanycodetopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanycodetopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
