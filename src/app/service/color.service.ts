import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { color } from '../modal/Modal';

@Injectable({
  providedIn: 'root'
})
export class ColorService  {

  constructor(private http: HttpClient) { }

  addcolorToProduct(DiscList :color[], idProduct: number): Observable<color[]> {
    return this.http.post<color[]>(`http://localhost:8082/api/addColorToProduct/${idProduct}`,DiscList);
  }
 

editcolorToProduct(DiscList : color[], idProduct:number): Observable<color[]>{
  return this.http.post<color[]>(`http://localhost:8082/api/editColor/${idProduct}`,DiscList);
}




  findcolorsForProduct(idProduct: number): Observable<color[]> {
    return this.http.get<color[]>(`http://localhost:8082/api/findColorsForProduct/${idProduct}`);
  }
}