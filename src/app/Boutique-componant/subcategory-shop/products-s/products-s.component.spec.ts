import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSComponent } from './products-s.component';

describe('ProductsSComponent', () => {
  let component: ProductsSComponent;
  let fixture: ComponentFixture<ProductsSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
