import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../modal/Modal';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategoryToBoutique(category: Category, idUser: number): Observable<Category> {
    return this.http.post<Category>(`http://localhost:8082/api/addCategoryToBoutique/${idUser}`, category);
  }
  editCategory(category: Category, id: number): Observable<Category> {
    return this.http.put<Category>(`http://localhost:8082/api/editCategory/${id}`, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(`http://localhost:8082/api/deleteCategory/${id}`);
  }

  findCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`http://localhost:8082/api/findCategoryById/${id}`);
  }

  findAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`http://localhost:8082/api/findAllCategories`);
  }

  findCategoriesForBoutique(idUser: number): Observable<Category[]> {
    return this.http.get<Category[]>(`http://localhost:8082/api/findCategoriesForBoutique/${idUser}`);
  }
}
