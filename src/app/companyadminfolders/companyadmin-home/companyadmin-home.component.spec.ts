import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyadminHomeComponent } from './companyadmin-home.component';

describe('CompanyadminHomeComponent', () => {
  let component: CompanyadminHomeComponent;
  let fixture: ComponentFixture<CompanyadminHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyadminHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyadminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
