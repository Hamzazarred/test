import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Slider } from '../modal/Modal';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private http: HttpClient) { }

  addSliderToBoutique(SliderList :Slider[], idBoutique: number): Observable<Slider[]> {
    return this.http.post<Slider[]>(`http://localhost:8082/api/addSliderToBoutique/${idBoutique}`,SliderList);
  }
 

editSliderToBoutique(SliderList : Slider[], idBoutique:number): Observable<Slider[]>{
  return this.http.post<Slider[]>(`http://localhost:8082/api/editSliderToBoutique/${idBoutique}`,SliderList);
}




  findSliderForBoutique(idBoutique: number): Observable<Slider[]> {
    return this.http.get<Slider[]>(`http://localhost:8082/api/findSlidersForBoutique/${idBoutique}`);
  }
}