import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosePaymentComponent } from './close-payment.component';

describe('ClosePaymentComponent', () => {
  let component: ClosePaymentComponent;
  let fixture: ComponentFixture<ClosePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
