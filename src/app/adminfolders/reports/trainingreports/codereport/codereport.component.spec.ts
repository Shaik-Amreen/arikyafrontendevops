import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodereportComponent } from './codereport.component';

describe('CodereportComponent', () => {
  let component: CodereportComponent;
  let fixture: ComponentFixture<CodereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodereportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
