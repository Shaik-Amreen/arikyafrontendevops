import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArikyahomepageComponent } from './arikyahomepage.component';

describe('ArikyahomepageComponent', () => {
  let component: ArikyahomepageComponent;
  let fixture: ComponentFixture<ArikyahomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArikyahomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArikyahomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
