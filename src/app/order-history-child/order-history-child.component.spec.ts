import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistoryChildComponent } from './order-history-child.component';

describe('OrderHistoryChildComponent', () => {
  let component: OrderHistoryChildComponent;
  let fixture: ComponentFixture<OrderHistoryChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderHistoryChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHistoryChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
