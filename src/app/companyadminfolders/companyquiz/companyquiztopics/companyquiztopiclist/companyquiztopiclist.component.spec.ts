import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyquiztopiclistComponent } from './companyquiztopiclist.component';

describe('CompanyquiztopiclistComponent', () => {
  let component: CompanyquiztopiclistComponent;
  let fixture: ComponentFixture<CompanyquiztopiclistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyquiztopiclistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyquiztopiclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
