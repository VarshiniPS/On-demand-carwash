import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmemberComponent } from './loginmember.component';

describe('LoginmemberComponent', () => {
  let component: LoginmemberComponent;
  let fixture: ComponentFixture<LoginmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginmemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
