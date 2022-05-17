import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobprofilesComponent } from './jobprofiles.component';

describe('JobprofilesComponent', () => {
  let component: JobprofilesComponent;
  let fixture: ComponentFixture<JobprofilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobprofilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
