import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconheaderComponent } from './iconheader.component';

describe('IconheaderComponent', () => {
  let component: IconheaderComponent;
  let fixture: ComponentFixture<IconheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
