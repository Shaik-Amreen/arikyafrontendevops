import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycampusplacementsreportsComponent } from './companycampusplacementsreports.component';

describe('CompanycampusplacementsreportsComponent', () => {
  let component: CompanycampusplacementsreportsComponent;
  let fixture: ComponentFixture<CompanycampusplacementsreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanycampusplacementsreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanycampusplacementsreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
