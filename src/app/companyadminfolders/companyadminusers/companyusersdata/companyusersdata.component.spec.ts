import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyusersdataComponent } from './companyusersdata.component';

describe('CompanyusersdataComponent', () => {
  let component: CompanyusersdataComponent;
  let fixture: ComponentFixture<CompanyusersdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyusersdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyusersdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
