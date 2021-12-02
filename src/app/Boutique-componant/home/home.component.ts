import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LoginClientComponent } from 'src/app/admin-pop/login-client/login-client.component';


import { Boutique, Cart, Product, ProductOrder, ProductOrders, Slider, Tag, User } from 'src/app/modal/Modal';
import { RegisterClientComponent } from 'src/app/register-client/register-client.component';
import { BoutiqueService } from 'src/app/service/boutique.service';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';
import { SliderService } from 'src/app/service/slider.service';

import { TagService } from 'src/app/service/tag.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { CartHomeComponent } from '../cart-home/cart-home.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {
  idboutique :number;
  total: number;
  selectedProductOrder: ProductOrder;
  sub: Subscription;
  tags: Tag[] = [];
 sliders:any=[]
  orderFinished: boolean;
	orders: ProductOrders;
  productT:ProductOrder;
	currentUser:User;
  boutique:Boutique
  slides: any ;
  carts: Cart[];
  title:string="All Category"
  products:any[]=[];
  productOrders: ProductOrder[] = [];
  @Output() onOrderFinished: EventEmitter<boolean>;
  slidess:any=[[[]]]
SL:Slider[]
  cart: Cart = {} as Cart;
  ngOnInit() {
    this.productOrders = [];
    this.currentUser = this.token.getUser();
  this.loaddata()
    this.orders = new ProductOrders();
		this.loadCart();
		this.loadTotal();
    this.route.params.subscribe(params => {
      this.sliderService.findSliderForBoutique(params.idBoutique).subscribe((slider)=>
      {   
      
        this.SL=slider
        console.log("btgbtyth")
      
      });
        let s:any=[[]];
      this.tagService.findTagsForBoutique(params.idBoutique).subscribe(res=> {

        this.tags=res;
         
        this.tags.sort(function (a, b) {
          return a.priorite - b.priorite;
        });
        this.bs.findBoutiqueById(params.idBoutique).subscribe(boutique=>{
          this.boutique=boutique
          console.log(boutique)
        })

        for(var i=0; i<this.tags.length;i++){  
          this.slides = this.chunk(this.tags[i].products, 4);
        s.push(this.slides);
        }
       this.slidess=s;
      
       s.splice(0,1)//ifasa5 col lkol mais delete tfasa5 contunu 
       this.getAllTag(this.tags)
     
      });});

  
  }
  constructor(private sliderService : SliderService,private tokenStorageService: TokenStorageService,private bs:BoutiqueService,
     private toastr: ToastrService, private cartService: CartService,
     private token:TokenStorageService,private orderService: OrderService, 
      private dialog: MatDialog,private productService: ProductService,
      private tagService: TagService,private route: ActivatedRoute,private router: Router) { this.total = 0;
		this.orderFinished = false;
		this.onOrderFinished = new EventEmitter<boolean>();
		this.currentUser = this.token.getUser();
    

  }
 Slides = [
    {'image': 'https://citywatch.com.tn/modules/ps_imageslider/images/4d73bab1783930a5fc4d3748f7fd13ab1e7955f6_BHPC.jpg','title':'Welcome to our store','disc':'We hand make the most awesomest products world Photo by There Tjernastrom','width':'200','height':'200'}, 
    {'image': 'https://citywatch.com.tn/modules/ps_imageslider/images/4d73bab1783930a5fc4d3748f7fd13ab1e7955f6_BHPC.jpg','title':'frvrf','disc':'vrvrf','width':'200','height':'200'},
  ];
  chunk(arr: any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  
ver (j : number): boolean{
if(this.tags[j].products.length>=4)
return true  
        else
return false
}

logout(): void {
  this.tokenStorageService.signOut();
  window.location.reload();
}
open()
{   if(this.currentUser){
  const dialogConfig = new MatDialogConfig();
  this.dialog
 .open(CartHomeComponent, {
  
   
   width: '60%',

  autoFocus: true,
  disableClose: false,
  })
  .afterClosed()
  .subscribe((res) => {
    window.location.reload()
  
   });

   
    }
    else{
      this.toastr.error("Please login to open this")
    }
}
getpro(pro)

{ 
  this.title=pro.name;
 
  this.products=[]
 this.products=pro.products;
  for(var i=0 ; i<this.products.length;i++)
 {
   this.sliders.push({path:  this.products[i].pictureUrl})
 }

}
getAllTag(tags){
  this.title="All Tags"
  this.products=[]
  for(var i=0 ; i<=tags.length;i++)
 {
  
 
  for(var j=0 ; j<this.tags[i].products.length;j++)
    this.products.push(tags[i].products[j])
   
 
 }


}
adToCart(order: ProductOrder) {

  

  this.orderService.SelectedProductOrder = order;
 this.selectedProductOrder = this.orderService.SelectedProductOrder;

 }
 addToCart(order){
if(this.currentUser)
 {


  this.cart.name = order.name;
  this.cart.price = order.price;
  this.cart.quantity = order.quantity;
  this.cart.pictureUrl = order.pictureUrl;
 this.cart.quantity=1
  this.cartService.addCartToUser(this.cart, this.currentUser.id).subscribe((x) => {

  })
  this.cartService.ver(this.cart, this.currentUser.id).subscribe((x) => {
    if(x){
    
  this.adToCart(this.productT) 
    }
    else
    {  this.toastr.info("This Product arread exist in your Cart")}
  

    

})
 }
else
{
  this.toastr.error("Please login to buy product");
}}
loaddata()
{
 
  if(this.currentUser!=null){
  this.cartService.findCartsForUser(this.currentUser.id).subscribe(carts => {
    this.carts = carts;
   if( !this.orderService.SelectedProductOrder){
    console.log(this.orderService.SelectedProductOrder)
   
    this.carts.forEach(x=> {
      this.productService.findByName(x.name).subscribe(
        (products: any[])=> {
          products.forEach(y =>  {
            
            this.productT= new ProductOrder(y, x.quantity);
  
           this.adToCart(this.productT) ;
         
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
            
         
          });
         
        }
      );
 
    })
    }
    
    console.log(this.orderService.SelectedProductOrder)
   
 
  });
}
}
reset() {
  this.orderFinished = false;
  this.orders = new ProductOrders();
   // this.orders=JSON.parse(sessionStorage.getItem(hamza));
   // this.orders.productOrders = JSON.parse(sessionStorage.getItem(hamza));
  this.loadTotal();
  this.total = 0;
  }
  private calculateTotal(products: ProductOrder[]): number {
		let sum = 0;
		products.forEach((value) => {
		  sum += value.product.price * value.quantity;
		});
		return sum ;
	  }
    loadTotal() {
      this.sub = this.orderService.OrdersChanged.subscribe(() => {
        this.total = this.calculateTotal(this.orders.productOrders);
      
      });
    }
loadCart() {
  this.sub = this.orderService.ProductOrderChanged.subscribe(() => {
    let productOrder = this.orderService.SelectedProductOrder;
    if (productOrder) {
    this.orders.productOrders.push(
      new ProductOrder(productOrder.product, productOrder.quantity)
    );
    
    //sessionStorage.setItem(hamza,JSON.stringify(this.orders));

    }
   
  //  console.log(sessionStorage.getItem(hamza));
    this.orderService.ProductOrders = this.orders;
    this.orders = this.orderService.ProductOrders;
    this.total = this.calculateTotal(this.orders.productOrders);
  });
  }
productInfo(id: number) {
    this.router.navigate(['shop/product', id]);
}
shop() {
  this.route.params.subscribe(params => {
    this.idboutique=params.idBoutique

    this.router.navigate(['/shop/',this.idboutique]) 
		
		  .then(() => {
			window.location.reload();
		  });


  })
}

login() {
    
  const dialogConfig = new MatDialogConfig();
  this.dialog
    .open(LoginClientComponent, {
    })
    .afterClosed()
    .subscribe((res) => {
 
    });

}
register() {
    
  const dialogConfig = new MatDialogConfig();
  this.dialog
    .open(RegisterClientComponent, {
    
     
     
     
    })
    .afterClosed()
    .subscribe((res) => {
 
    });

}
}
