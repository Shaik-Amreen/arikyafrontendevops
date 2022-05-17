import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiztopicslistComponent } from './quiztopicslist.component';

describe('QuiztopicslistComponent', () => {
  let component: QuiztopicslistComponent;
  let fixture: ComponentFixture<QuiztopicslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiztopicslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiztopicslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
