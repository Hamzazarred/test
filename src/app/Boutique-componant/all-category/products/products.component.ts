import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LoginComponent } from 'src/app/login/login.component';
import { Cart, Category, Product, ProductOrder, ProductOrders, User } from 'src/app/modal/Modal';
import { BoutiqueService } from 'src/app/service/boutique.service';
import { CartService } from 'src/app/service/cart.service';
import { CategoryService } from 'src/app/service/category.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productOrders: ProductOrder[] = [];
  productOrdersselect: ProductOrder[] = [];
  productT:ProductOrder;

  products: Product[] = [];
  ps: Product[] = [];
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
  constructor(private boutiques:BoutiqueService,private categ:CategoryService, private toastr: ToastrService,private orderService: OrderService, private router: Router, private dialog: MatDialog,
    private token:TokenStorageService, private productService: ProductService,   private cartService: CartService, private userService: UserService,private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.productOrders = [];
    this.loadProducts();


    this.loadOrders();
    
  
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
                this.add(this.productT);
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
                this.add(this.productT);
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
  }
  add(productT: ProductOrder): void {

    this.productOrdersselect.push(new ProductOrder(productT.product, productT.quantity));

    
  }

  addToCart(order: ProductOrder){
    this.cart.name = order.product.name;
    this.cart.price = order.product.price;
    this.cart.quantity = order.quantity;
    this.cart.pictureUrl = order.product.pictureUrl;
 
    this.cartService.ver(this.cart, this.currentUser.id).subscribe((x) => {
console.log()
      if(x){
        this.cartService.addCartToUser(this.cart, this.currentUser.id).subscribe((x) => {
          this.orderService.SelectedProductOrder = order;
          this.selectedProductOrder = this.orderService.SelectedProductOrder;
          this.productSelected = true;
       
              this.cartService.addCartToUser(this.cart, this.currentUser.id).subscribe(() => {
          })
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
      
        this.idBoutique = params.idBoutique});
    
      
      
    
    this.categ.findCategoriesForBoutique(this.idBoutique).subscribe(
     
      (category: any[]) => {
      
        for(var i=0;i<category.length;i++){
      this.productService.findProductsForCategory(category[i].id).subscribe(p=>
        {
          console.log(p)
          p.forEach(p => {
            this.productOrders.push(new ProductOrder(p, 0));
          })
        }
      )
      }
      }
    );
    
  
  }

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
