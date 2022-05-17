import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyadminNavbarComponent } from './companyadmin-navbar.component';

describe('CompanyadminNavbarComponent', () => {
  let component: CompanyadminNavbarComponent;
  let fixture: ComponentFixture<CompanyadminNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyadminNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyadminNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
