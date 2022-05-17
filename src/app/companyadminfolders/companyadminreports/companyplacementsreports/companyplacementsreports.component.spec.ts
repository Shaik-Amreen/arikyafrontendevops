import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyplacementsreportsComponent } from './companyplacementsreports.component';

describe('CompanyplacementsreportsComponent', () => {
  let component: CompanyplacementsreportsComponent;
  let fixture: ComponentFixture<CompanyplacementsreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyplacementsreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyplacementsreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
