import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetOtpVerifyComponent } from './reset-otp-verify.component';

describe('ResetOtpVerifyComponent', () => {
  let component: ResetOtpVerifyComponent;
  let fixture: ComponentFixture<ResetOtpVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetOtpVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetOtpVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
