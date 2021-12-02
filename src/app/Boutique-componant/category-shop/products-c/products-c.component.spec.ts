import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCComponent } from './products-c.component';

describe('ProductsCComponent', () => {
  let component: ProductsCComponent;
  let fixture: ComponentFixture<ProductsCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
