import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyadminusersComponent } from './companyadminusers.component';

describe('CompanyadminusersComponent', () => {
  let component: CompanyadminusersComponent;
  let fixture: ComponentFixture<CompanyadminusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyadminusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyadminusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
