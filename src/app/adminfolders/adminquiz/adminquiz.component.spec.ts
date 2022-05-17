import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminquizComponent } from './adminquiz.component';

describe('AdminquizComponent', () => {
  let component: AdminquizComponent;
  let fixture: ComponentFixture<AdminquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
