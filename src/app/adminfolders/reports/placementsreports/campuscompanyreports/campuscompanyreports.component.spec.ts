import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampuscompanyreportsComponent } from './campuscompanyreports.component';

describe('CampuscompanyreportsComponent', () => {
  let component: CampuscompanyreportsComponent;
  let fixture: ComponentFixture<CampuscompanyreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampuscompanyreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampuscompanyreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
