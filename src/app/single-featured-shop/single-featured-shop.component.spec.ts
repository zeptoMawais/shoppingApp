import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFeaturedShopComponent } from './single-featured-shop.component';

describe('SingleFeaturedShopComponent', () => {
  let component: SingleFeaturedShopComponent;
  let fixture: ComponentFixture<SingleFeaturedShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFeaturedShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFeaturedShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
