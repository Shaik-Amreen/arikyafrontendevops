import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplacementsComponent } from './addplacements.component';

describe('AddplacementsComponent', () => {
  let component: AddplacementsComponent;
  let fixture: ComponentFixture<AddplacementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddplacementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
