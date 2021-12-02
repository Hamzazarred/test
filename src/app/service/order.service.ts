import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductOrder, ProductOrders } from '../modal/Modal';



@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private productOrder: ProductOrder;
  private orders: ProductOrders = new ProductOrders();

  private productOrderSubject = new Subject();
  private ordersSubject = new Subject();
  



  ProductOrderChanged = this.productOrderSubject.asObservable();
   OrdersChanged = this.ordersSubject.asObservable();


  constructor(private http: HttpClient) {
  }
  saveOrder(order: ProductOrders): Observable<ProductOrders> {
    return this.http.post<ProductOrders>('http://localhost:8081/api/orders', order);
  }
  set SelectedProductOrder(value: ProductOrder) {
    this.productOrder = value;
    this.productOrderSubject.next();}
  vide () {

this.orders.productOrders.splice(0,this.orders.productOrders.length)

  }

  get SelectedProductOrder() {
    return this.productOrder;
  }

  set ProductOrders(value: ProductOrders) {
    this.orders = value;
    this.ordersSubject.next();
  }

  get ProductOrders() {
    return this.orders;
  }


}
