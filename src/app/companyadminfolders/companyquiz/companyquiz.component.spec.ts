import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyquizComponent } from './companyquiz.component';

describe('CompanyquizComponent', () => {
  let component: CompanyquizComponent;
  let fixture: ComponentFixture<CompanyquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
