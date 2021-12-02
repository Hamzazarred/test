import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { discription } from '../modal/Modal';

@Injectable({
  providedIn: 'root'
})
export class DiscriptionService  {

  constructor(private http: HttpClient) { }

  addsDiscToProduct(DiscList :discription[], idProduct: number): Observable<discription[]> {
    return this.http.post<discription[]>(`http://localhost:8082/api/addDiscToProduct/${idProduct}`,DiscList);
  }
 

editDiscToProduct(DiscList : discription[], idProduct:number): Observable<discription[]>{
  return this.http.post<discription[]>(`http://localhost:8082/api/editDiscToProduct/${idProduct}`,DiscList);
}




  findDiscsForProduct(idProduct: number): Observable<discription[]> {
    return this.http.get<discription[]>(`http://localhost:8082/api/findDiscsForProduct/${idProduct}`);
  }
}