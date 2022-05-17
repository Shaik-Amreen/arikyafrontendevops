import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyaddusersComponent } from './companyaddusers.component';

describe('CompanyaddusersComponent', () => {
  let component: CompanyaddusersComponent;
  let fixture: ComponentFixture<CompanyaddusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyaddusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyaddusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
