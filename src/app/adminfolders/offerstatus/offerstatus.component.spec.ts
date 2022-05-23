import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferstatusComponent } from './offerstatus.component';

describe('OfferstatusComponent', () => {
  let component: OfferstatusComponent;
  let fixture: ComponentFixture<OfferstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
