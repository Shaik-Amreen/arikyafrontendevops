import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyjobprofiledataComponent } from './companyjobprofiledata.component';

describe('CompanyjobprofiledataComponent', () => {
  let component: CompanyjobprofiledataComponent;
  let fixture: ComponentFixture<CompanyjobprofiledataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyjobprofiledataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyjobprofiledataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
