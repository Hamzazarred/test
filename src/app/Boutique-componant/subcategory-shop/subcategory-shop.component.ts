import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, SCategory } from 'src/app/modal/Modal';
import { ProductService } from 'src/app/service/product.service';
import { ScategoryService } from 'src/app/service/scategory.service';
import { ProductsSComponent } from './products-s/products-s.component';
import { ShoppingCartSComponent } from './shopping-cart-s/shopping-cart-s.component';

@Component({
  selector: 'app-subcategory-shop',
  templateUrl: './subcategory-shop.component.html',
  styleUrls: ['./subcategory-shop.component.scss']
})
export class SubcategoryShopComponent implements OnInit {
  orderFinished = false;
  name: any;
  showSearch = false;
  products: Product[];
  product: Product = {} as Product;
  showBtn = -1;
  idScategory:number
  showMyContainerInfo = false;
  scategory :SCategory={}as SCategory;
  @ViewChild('productsSC')
  productsSC: ProductsSComponent;

  @ViewChild('shoppingCartSC')
  shoppingCartSC: ShoppingCartSComponent;


  constructor( private route: ActivatedRoute, private productService: ProductService, private scategoryService :ScategoryService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
   console.log(params)
    this.scategoryService.findscategorysById(params.Scategory).subscribe(
      scategory=>{this.scategory=scategory}
    )
   })}

  finishOrder(orderFinished: boolean) {
    this.orderFinished = orderFinished;
  }

  reset() {
    this.orderFinished = false;
    this.productsSC.reset();
    this.shoppingCartSC.reset();
   
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
