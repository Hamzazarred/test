import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boutique } from '../modal/Modal';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {

  constructor(private http: HttpClient) { 
    
  }
  addBoutiqueToUser(boutique:Boutique,idUser: number):Observable<Boutique>
  {
    return this.http.post<Boutique>(`http://localhost:8082/api/addBoutiqueToUser/${idUser}`,boutique);
  }
  findBoutiqueToUser(idUser :number):Observable<Boutique>
  {
    return this.http.get<Boutique>(`http://localhost:8082/api/findBoutiqueToUser/${idUser}`)
  }
  findBoutiqueById(idboutique :number):Observable<Boutique>
  {
    return this.http.get<Boutique>(`http://localhost:8082/api/findBoutiqueById/${idboutique}`)
  }
 
 
}
