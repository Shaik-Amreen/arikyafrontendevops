import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyquiztopicsComponent } from './companyquiztopics.component';

describe('CompanyquiztopicsComponent', () => {
  let component: CompanyquiztopicsComponent;
  let fixture: ComponentFixture<CompanyquiztopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyquiztopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyquiztopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
