import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { Cart, Product, ProductOrder, ProductOrders, User } from 'src/app/modal/Modal';

import { ProductService } from 'src/app/service/product.service';


import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.scss']
})
export class AllCategoryComponent implements OnInit {
  orderFinished = false;
  name: any;
  showSearch = false;
  products: Product[];
  product: Product = {} as Product;
  showBtn = -1;
  showMyContainerInfo = false;

  @ViewChild('productsC')
  productsC: ProductsComponent;

  @ViewChild('shoppingCartC')
  shoppingCartC: ShoppingCartComponent;


  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void { }

  finishOrder(orderFinished: boolean) {
    this.orderFinished = orderFinished;
  }

  reset() {
    this.orderFinished = false;
    this.productsC.reset();
    this.shoppingCartC.reset();
   
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
