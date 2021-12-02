import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Product } from 'src/app/modal/Modal';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { ProductsSComponent } from '../subcategory-shop/products-s/products-s.component';
import { ShoppingCartSComponent } from '../subcategory-shop/shopping-cart-s/shopping-cart-s.component';
import { ProductsCComponent } from './products-c/products-c.component';
import { ShoppingCartCComponent } from './shopping-cart-c/shopping-cart-c.component';

@Component({
  selector: 'app-category-shop',
  templateUrl: './category-shop.component.html',
  styleUrls: ['./category-shop.component.scss']
})
export class CategoryShopComponent implements OnInit {
  orderFinished = false;
  name: any;
  showSearch = false;
  products: Product[];
  product: Product = {} as Product;
  showBtn = -1;
  showMyContainerInfo = false;
  category :Category={}as Category;
  @ViewChild('productsCC')
  productsCC: ProductsCComponent;

  @ViewChild('shoppingCartCC')
  shoppingCartCC: ShoppingCartCComponent;


  constructor( private categoryService :CategoryService,private route: ActivatedRoute,private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
   console.log(params)
    this.categoryService.findCategoryById(params.idCategory).subscribe(
      category=>{this.category=category}
    )
   })}
  finishOrder(orderFinished: boolean) {
    this.orderFinished = orderFinished;
  }

  reset() {
    this.orderFinished = false;
    this.productsCC.reset();
    this.shoppingCartCC.reset();
   
  }
  //ki nji na33mal search bach nlawej bi esmm el produit 
  search() {
    this.productService.findByName(this.name).subscribe((products) => {
      this.products = products;
      this.showSearch = true;
    });
  }

  showUndoBtn(index) {
    this.showBtn = index;
  }
  productInfo(id: number) {
    this.productService.findProductById(id).subscribe((product) => {
      this.product = product;
    });
    this.showMyContainerInfo = !this.showMyContainerInfo;
  }
  sngleProduct(id: number) {
    this.router.navigate(['sangle/product', id]);
  }
}
