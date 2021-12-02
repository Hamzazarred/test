import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Cart, Product, ProductOrder, ProductOrders, User } from 'src/app/modal/Modal';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserService } from 'src/app/service/user.service';
import { Subscription } from 'rxjs';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-cadre',
  templateUrl: './cadre.component.html',
  styleUrls: ['./cadre.component.scss']
})
export class CadreComponent  implements OnInit {
  user: User = new User();
  productOrders: ProductOrder[] = [];
  productOrdersselect: ProductOrder[] = [];
  productT:ProductOrder;
  products: Product[] = [];

  selectedProductOrder: ProductOrder;
  shoppingCartOrders: ProductOrders;
  sub: Subscription;
  productSelected = true;
  Selected =false;
  description: string = '';
  showMyContainerInfo = false;
  showBtn = -1;
  idCart: number;
  cartExist: Cart = {} as Cart;
  cart: Cart = {} as Cart;
  carts: Cart[];
 
  public addmore: FormGroup;
  User:User;
  
  constructor( private _fb: FormBuilder,private router: Router, private dialog: MatDialog,
    private productService: ProductService,   private cartService: CartService, private userService: UserService,private token:TokenStorageService) {
    
  }
  ngOnInit() {
  
    this.productOrders = [];
    this.loadProducts();
    //this.loadOrders();
    this.userService.findByUsername(this.userService.getUsername()).subscribe(user => {
      this.user = user;
      this.cartService.findCartsForUser(this.user.id).subscribe(carts => {
        this.carts = carts;
        this.carts.forEach(x=> {
          this.productService.findByName(x.name).subscribe(
            (products: any[])=> {
              products.forEach(y =>  {
               
                this.productT= new ProductOrder(y, x.quantity);
      
               this.adToCart(this.productT) ;
                this.remove(this.productT);
                this.add(this.productT);
              });
             
            }
          );
     
        })

     
      });
    });
  }

  adToCart(order: ProductOrder) {
    //this.orderService.SelectedProductOrder = order;
   // this.selectedProductOrder = this.orderService.SelectedProductOrder;
    this.cart.name = order.product.name;
    this.productSelected = true;
    this.cartService.saveCartName(this.cart.name);
  }
  remove(productT: ProductOrder): void {
    this.productOrders=  this.productOrders.filter(productOrder =>productT.product.name != productOrder.product.name);
  }
  add(productT: ProductOrder): void {
    this.productOrdersselect.push(new ProductOrder(productT.product, productT.quantity));
  }
  
  addToCart(order: ProductOrder, idUser : number) {
  
    //this.orderService.SelectedProductOrder = order;
    //this.selectedProductOrder = this.orderService.SelectedProductOrder;
    this.productSelected = true;
    this.cart.name = order.product.name;
    this.cart.price = order.product.price;
    this.cart.quantity = order.quantity;
    this.cart.pictureUrl = order.product.pictureUrl;
    console.log(idUser);
    
    this.cartService.addCartToUser(this.cart, idUser).subscribe(() => {
     
    
    })
    
  }

  removeFromCart(productOrder: ProductOrder, idUser :number) {
    let index = this.getProductIndex(productOrder.product);
    if (index > -1) {
      this.shoppingCartOrders.productOrders.splice(
        this.getProductIndex(productOrder.product), 1);

        
        console.log(idUser);
        this.cartService.findCartsForUser(idUser).subscribe(carts => {
          this.cartExist = carts.filter(item => item.name === productOrder.product.name)[0];
          this.cartService.removeFromCart(this.cartExist.id, idUser).subscribe(() => {
          })
        })
    }
    //this.orderService.ProductOrders = this.shoppingCartOrders;
  //  this.shoppingCartOrders = this.orderService.ProductOrders;
    this.productSelected = false;
  }

  getProductIndex(product: Product): number {
   // return this.orderService.ProductOrders.productOrders.findIndex(
     // value => value.product === product);
     return 5;
  }
/********************** */
  isProductSelected(product: Product): boolean {
    return this.getProductIndex(product) > -1;
   }

  
  
   
  loadProducts() {
    this.productService.findAllProducts().subscribe(
      (products: any[]) => {
        this.products = products;
        this.products.forEach(product => {
          this.productOrders.push(new ProductOrder(product, 0));
        })
      }
    );
    
  }

 ku

  reset() {
    this.productOrders = [];
    this.productOrdersselect = [];
    this.loadProducts();
    //this.orderService.ProductOrders.productOrders = [];
   // this.loadOrders();
    this.productSelected = false;
  }
  productInfo(id: number) {
    this.productService.findProductById(id).subscribe(data => {
      this.description = data.description;
      console.log(this.description);
    });
    this.showMyContainerInfo = !this.showMyContainerInfo;
  }

  showUndoBtn(index) {
    this.showBtn = index;
  }
  sngleProduct(id: number) {
    this.router.navigate(['sangle/product', id]);
  }
  
}
