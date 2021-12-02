import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartSComponent } from './shopping-cart-s.component';

describe('ShoppingCartSComponent', () => {
  let component: ShoppingCartSComponent;
  let fixture: ComponentFixture<ShoppingCartSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
