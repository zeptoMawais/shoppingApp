import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseCartComponent } from './close-cart.component';

describe('CloseCartComponent', () => {
  let component: CloseCartComponent;
  let fixture: ComponentFixture<CloseCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
