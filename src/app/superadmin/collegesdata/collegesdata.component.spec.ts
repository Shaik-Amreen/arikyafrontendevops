import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegesdataComponent } from './collegesdata.component';

describe('CollegesdataComponent', () => {
  let component: CollegesdataComponent;
  let fixture: ComponentFixture<CollegesdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegesdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegesdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
