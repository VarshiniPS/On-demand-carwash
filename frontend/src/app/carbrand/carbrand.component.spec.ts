import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbrandComponent } from './carbrand.component';

describe('CarbrandComponent', () => {
  let component: CarbrandComponent;
  let fixture: ComponentFixture<CarbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarbrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
