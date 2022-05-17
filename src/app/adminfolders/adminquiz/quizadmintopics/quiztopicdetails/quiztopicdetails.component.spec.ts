import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiztopicdetailsComponent } from './quiztopicdetails.component';

describe('QuiztopicdetailsComponent', () => {
  let component: QuiztopicdetailsComponent;
  let fixture: ComponentFixture<QuiztopicdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiztopicdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiztopicdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
