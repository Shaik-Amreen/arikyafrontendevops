import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyjobprofilehomeComponent } from './companyjobprofilehome.component';

describe('CompanyjobprofilehomeComponent', () => {
  let component: CompanyjobprofilehomeComponent;
  let fixture: ComponentFixture<CompanyjobprofilehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyjobprofilehomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyjobprofilehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
