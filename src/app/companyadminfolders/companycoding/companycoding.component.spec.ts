import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycodingComponent } from './companycoding.component';

describe('CompanycodingComponent', () => {
  let component: CompanycodingComponent;
  let fixture: ComponentFixture<CompanycodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanycodingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanycodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
