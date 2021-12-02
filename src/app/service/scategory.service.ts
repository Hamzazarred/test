
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category, SCategory } from '../modal/Modal';

@Injectable({
  providedIn: 'root'
})
export class ScategoryService {

  constructor(private http: HttpClient) { }

  addscategorysToCategory(scategory: SCategory, idCategory: number): Observable<SCategory> {
    return this.http.post<SCategory>(`http://localhost:8082/api/addSCategoryToCategory/${idCategory}`, scategory);
  }
  editscategorys(SCategory: SCategory, id: number): Observable<SCategory> {
    return this.http.put<SCategory>(`http://localhost:8082/api/editSCategory/${id}`,SCategory);
  }

  deletescategorys(id: number): Observable<SCategory> {
    return this.http.delete<SCategory>(`http://localhost:8082/api/deleteSCategory/${id}`);
  }

  findscategorysById(id: number): Observable<SCategory> {
    return this.http.get<SCategory>(`http://localhost:8082/api/findSCategoryById/${id}`);
  }

  findAllCategories(): Observable<SCategory[]> {
    return this.http.get<SCategory[]>(`http://localhost:8082/api/findAllSCategories`);
  }

  findSCategoriesForCategory(idSCategory: number): Observable<SCategory[]> {
    return this.http.get<SCategory[]>(`http://localhost:8082/api/findSCategoriesForCategory/${idSCategory}`);
  }
}
