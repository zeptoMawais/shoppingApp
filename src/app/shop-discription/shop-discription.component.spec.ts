import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDiscriptionComponent } from './shop-discription.component';

describe('ShopDiscriptionComponent', () => {
  let component: ShopDiscriptionComponent;
  let fixture: ComponentFixture<ShopDiscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDiscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDiscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
