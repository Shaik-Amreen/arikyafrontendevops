import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyempHomeComponent } from './companyemp-home.component';

describe('CompanyempHomeComponent', () => {
  let component: CompanyempHomeComponent;
  let fixture: ComponentFixture<CompanyempHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyempHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyempHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
