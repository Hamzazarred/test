import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../modal/Modal';

const NAME_KEY = 'NAME';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) { }

  addCartToUser(cart: Cart, idUser: number): Observable<Cart> {
    return this.http.post<Cart>(`http://localhost:8082/api/addCartToUser/${idUser}`, cart);
  }
 ver(cart: Cart, idUser: number): Observable <boolean> {
    return this.http.post<boolean>(`http://localhost:8082/api/e/${idUser}`, cart);
  }
  editCarts(carts: Cart[]): Observable<Cart[]> {
    return this.http.post<Cart[]>(`http://localhost:8082/api/editCarts`, carts);
  }

  deleteCart(id: number): Observable<Cart> {
    return this.http.delete<Cart>(`http://localhost:8082/api/deleteCart/${id}`);
  }

  findCartsForUser(idUser: number): Observable<Cart[]> {
    return this.http.get<Cart[]>(`http://localhost:8082/api/findCartsForUser/${idUser}`);
  }

  findCartById(id: number): Observable<Cart> {
    return this.http.get<Cart>(`http://localhost:8082/api/findCartById/${id}`);
  }

  removeFromCart(idCart: number, idUser: number): Observable<Cart> {
    return this.http.delete<Cart>(`http://localhost:8082/api/removeFromCart/${idCart}/${idUser}`);
  }

  findByCartName(name: string): Observable<Cart> {
    return this.http.get<Cart>(`http://localhost:8082/api/findByCartName/${name}`);
  }

  saveCartName(name: string) {
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY, name);
  }

  getCartName(): string {
    return sessionStorage.getItem(NAME_KEY);
  }
}
