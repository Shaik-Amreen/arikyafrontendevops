import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincodeComponent } from './admincode.component';

describe('AdmincodeComponent', () => {
  let component: AdmincodeComponent;
  let fixture: ComponentFixture<AdmincodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
