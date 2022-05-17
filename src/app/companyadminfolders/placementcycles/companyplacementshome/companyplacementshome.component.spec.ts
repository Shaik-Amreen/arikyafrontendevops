import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyplacementshomeComponent } from './companyplacementshome.component';

describe('CompanyplacementshomeComponent', () => {
  let component: CompanyplacementshomeComponent;
  let fixture: ComponentFixture<CompanyplacementshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyplacementshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyplacementshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
