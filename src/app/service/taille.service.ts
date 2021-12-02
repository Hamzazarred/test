 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Taille } from '../modal/Modal';

@Injectable({
  providedIn: 'root'
})
export class TailleService {

  constructor(private http: HttpClient) { }

  addTailleToProduct(TailleList :Taille[], idProduct: number): Observable<Taille[]> {
    return this.http.post<Taille[]>(`http://localhost:8082/api/addTailleToProduct/${idProduct}`,TailleList);
  }
 

editTailleToProduct(TailleList : Taille[], idProduct:number): Observable<Taille[]>{
  return this.http.post<Taille[]>(`http://localhost:8082/api/editTailleToProduct/${idProduct}`,TailleList);
}




  findTailleForProduct(idProduct: number): Observable<Taille[]> {
    return this.http.get<Taille[]>(`http://localhost:8082/api/findTaillesForProduct/${idProduct}`);
  }
}