import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanytrainingreportsComponent } from './companytrainingreports.component';

describe('CompanytrainingreportsComponent', () => {
  let component: CompanytrainingreportsComponent;
  let fixture: ComponentFixture<CompanytrainingreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanytrainingreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanytrainingreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
