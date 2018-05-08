import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDesciptionComponent } from './product-desciption.component';

describe('ProductDesciptionComponent', () => {
  let component: ProductDesciptionComponent;
  let fixture: ComponentFixture<ProductDesciptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDesciptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDesciptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
