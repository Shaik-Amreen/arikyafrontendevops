import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyempNavbarComponent } from './companyemp-navbar.component';

describe('CompanyempNavbarComponent', () => {
  let component: CompanyempNavbarComponent;
  let fixture: ComponentFixture<CompanyempNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyempNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyempNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
