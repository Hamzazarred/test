import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryShopComponent } from './subcategory-shop.component';

describe('SubcategoryShopComponent', () => {
  let component: SubcategoryShopComponent;
  let fixture: ComponentFixture<SubcategoryShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoryShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
