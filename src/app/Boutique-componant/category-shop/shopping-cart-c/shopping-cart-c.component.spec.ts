import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartCComponent } from './shopping-cart-c.component';

describe('ShoppingCartCComponent', () => {
  let component: ShoppingCartCComponent;
  let fixture: ComponentFixture<ShoppingCartCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
