import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LoginComponent } from 'src/app/login/login.component';
import { Cart, Category, Item, ITEMS, Product, ProductOrder, ProductOrders, SCategory, User } from 'src/app/modal/Modal';
import { CartService } from 'src/app/service/cart.service';
import { CategoryService } from 'src/app/service/category.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';
import { ScategoryService } from 'src/app/service/scategory.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-products-s',
  templateUrl: './products-s.component.html',
  styleUrls: ['./products-s.component.scss']
})
export class ProductsSComponent implements OnInit {

  productOrders: ProductOrder[] = [];
  productOrdersselect: ProductOrder[] = [];
  productT:ProductOrder;
  products: Product[] = [];
  idScategory:number
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
  currentUser:User;
idBoutique:number;
  constructor( private toastr: ToastrService,private orderService: OrderService, private router: Router, private dialog: MatDialog,
     private route:ActivatedRoute,   private token:TokenStorageService, private productService: ProductService,   private cartService: CartService, private userService: UserService,) {

  }

  ngOnInit() {
    this.productOrders = [];
    this.loadProducts();


    this.loadOrders();
    this.currentUser = this.token.getUser();
  
      this.cartService.findCartsForUser(this.currentUser.id).subscribe(carts => {
        this.carts = carts;
       if( !this.orderService.SelectedProductOrder){
        
       
        this.carts.forEach(x=> {
          this.productService.findByName(x.name).subscribe(
            (products: any[])=> {
              products.forEach(y =>  {
                
                this.productT= new ProductOrder(y, x.quantity);
      
               this.adToCart(this.productT) ;
                this.remove(this.productT);
                //this.add(this.productT);
              });
             
            }
          );
     
        })}
        else{
          this.orderService.vide()
          console.log(this.orderService.ProductOrders)
        this.carts.forEach(x=> {
          this.productService.findByName(x.name).subscribe(
            (products: any[])=> {
              products.forEach(y =>  {
                
                this.productT= new ProductOrder(y, x.quantity);
                this.adToCart(this.productT) ;
               // this.add(this.productT);
                this.remove(this.productT);
             
              });
             
            }
          );
     
        })
        }
        
        console.log(this.orderService.SelectedProductOrder)
       
     
      });

  }
  adToCart(order: ProductOrder) {
   console.log("gtgrt")
   this.orderService.SelectedProductOrder = order;
    this.selectedProductOrder = this.orderService.SelectedProductOrder;
    this.cart.name = order.product.name;
    this.productSelected = true;
    this.cartService.saveCartName(this.cart.name);
  }
  remove(productT: ProductOrder): void {
    this.productOrders=  this.productOrders.filter(productOrder =>productT.product.name != productOrder.product.name);
    this.productOrders=  this.productOrders.filter(productOrder =>  productOrder.product.name !=productT.product.name);
  }
  add(productT: ProductOrder): void {
    this.productOrdersselect.push(new ProductOrder(productT.product, productT.quantity));
  }
  
  addToCart(order: ProductOrder){
    
 
    this.cartService.ver(this.cart, this.currentUser.id).subscribe((x) => {

      if(x){
        this.cartService.addCartToUser(this.cart, this.currentUser.id).subscribe((x) => {
  
        })
        this.orderService.SelectedProductOrder = order;
        this.selectedProductOrder = this.orderService.SelectedProductOrder;
        this.productSelected = true;
        this.cart.name = order.product.name;
        this.cart.price = order.product.price;
        this.cart.quantity = order.quantity;
        this.cart.pictureUrl = order.product.pictureUrl;
            this.cartService.addCartToUser(this.cart, this.currentUser.id).subscribe(() => {
        })
      }
      else
      {  this.toastr.error("This product already exists in your cart")}
  
      
  
  })}
  removeFromCart(productOrder: ProductOrder) {
    this.productSelected = false;
    let index = this.getProductIndex(productOrder.product);
    if (index > -1) {
      this.shoppingCartOrders.productOrders.splice(
        this.getProductIndex(productOrder.product), 1);

        
    
     this.cartService.findCartsForUser(this.currentUser.id).subscribe(carts => {
          this.cartExist = carts.filter(item => item.name === productOrder.product.name)[0];
          this.cartService.removeFromCart(this.cartExist.id, this.currentUser.id).subscribe(() => {
          })
        })
    }

    
    this.orderService.ProductOrders = this.shoppingCartOrders;
    this.shoppingCartOrders = this.orderService.ProductOrders;
  
  }

  getProductIndex(product: Product): number {
    return this.orderService.ProductOrders.productOrders.findIndex(
      value => value.product === product);
  }
/********************** */
  isProductSelected(product: Product): boolean {
    return this.getProductIndex(product) > -1;
   }

  
   
   loadProducts() {
    this.route.params.subscribe(
      params => {
   console.log(params)
    this.productService.findProductsForSCategory(params.Scategory).subscribe(
      (products: any[]) => {
        this.products = products;
        this.products.forEach(product => {
          this.productOrders.push(new ProductOrder(product, 0));
        })
      }
    );
   
    
  })}


  loadOrders() {
    this.sub = this.orderService.OrdersChanged.subscribe(() => {
      this.shoppingCartOrders = this.orderService.ProductOrders;
    });
  }

  reset() {
    this.productOrders = [];
    this.productOrdersselect = [];
    this.loadProducts();
    this.orderService.ProductOrders.productOrders = [];
    this.loadOrders();
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
  login() {
    this.dialog.open(LoginComponent);
  }
}
