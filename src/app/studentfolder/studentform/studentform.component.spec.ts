import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodequizdetailsComponent } from './codequizdetails.component';

describe('CodequizdetailsComponent', () => {
  let component: CodequizdetailsComponent;
  let fixture: ComponentFixture<CodequizdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodequizdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodequizdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
