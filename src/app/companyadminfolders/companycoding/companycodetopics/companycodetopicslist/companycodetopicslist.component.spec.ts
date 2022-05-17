import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycodetopicslistComponent } from './companycodetopicslist.component';

describe('CompanycodetopicslistComponent', () => {
  let component: CompanycodetopicslistComponent;
  let fixture: ComponentFixture<CompanycodetopicslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanycodetopicslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanycodetopicslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
