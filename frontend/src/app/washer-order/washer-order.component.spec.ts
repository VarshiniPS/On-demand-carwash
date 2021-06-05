import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherOrderComponent } from './washer-order.component';

describe('WasherOrderComponent', () => {
  let component: WasherOrderComponent;
  let fixture: ComponentFixture<WasherOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasherOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasherOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
