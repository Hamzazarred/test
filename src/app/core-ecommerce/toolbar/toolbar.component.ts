import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartHomeComponent } from 'src/app/Boutique-componant/cart-home/cart-home.component';


import { ProductOrder, ProductOrders, User } from 'src/app/modal/Modal';
import { OrderService } from 'src/app/service/order.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { ToolbarHelpers } from './toolbar.helpers';

@Component({
  selector: 'cdk-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
	
  @Input() sidenav;
	@Input() sidebar;
	@Input() drawer;
	@Input() matDrawerShow;
   mov : boolean =false
	searchOpen: boolean = false;
    toolbarHelpers = ToolbarHelpers;
	orderFinished: boolean;
	orders: ProductOrders;
	total: number;
	sub: Subscription;
	radioSel: any;
	priceDelivery: number;
	@Output() onOrderFinished: EventEmitter<boolean>;
	currentUser:User;
	constructor(  private token:TokenStorageService, private orderService: OrderService, private router: Router, private dialog: MatDialog) {
		this.total = 0;
		this.orderFinished = false;
		this.onOrderFinished = new EventEmitter<boolean>();
		this.currentUser = this.token.getUser();
		// this.itemsList = ITEMS;
		// this.radioSelected = 'item_1';
		// this.getSelecteditem();
	  }
	

	  ngOnInit() {
		this.orders = new ProductOrders();
		this.loadCart();
		this.loadTotal();
	
		// this.itemsList.forEach((item) => {
		//   this.onItemChange(item);
		// });
		// this.priceDelivery = 1.99;
	  }
	
	  movv(){
this.mov=!this.mov
	  }

	  private calculateTotal(products: ProductOrder[]): number {
		let sum = 0;
		products.forEach((value) => {
		  sum += value.product.price * value.quantity;
		
		});
		return sum ;
	  }
	
	  ngOnDestroy() {
		this.sub.unsubscribe();
	  }
	
	  finishOrder() {
		this.orderFinished = true;
	
		this.onOrderFinished.emit(this.orderFinished);
	  }
	
	  loadTotal() {
		this.sub = this.orderService.OrdersChanged.subscribe(() => {
		  this.total = this.calculateTotal(this.orders.productOrders);
		
		});
	  }
	  open()
	  {
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
	
	  reset() {
		this.orderFinished = false;
		this.orders = new ProductOrders();
	   // this.orders=JSON.parse(sessionStorage.getItem(hamza));
	   // this.orders.productOrders = JSON.parse(sessionStorage.getItem(hamza));
		this.loadTotal();
		this.total = 0;
	  }
	  // getSelecteditem() {
	  //   this.radioSel = ITEMS.find((Item) => Item.value === this.radioSelected);
	  //   this.radioSelectedString = JSON.stringify(this.radioSel);
	  // }
	
	  // onItemChange(item: any) {
	  //   this.getSelecteditem();
	  //   this.priceDelivery = item.price;
	  // }
	 
	}
	
