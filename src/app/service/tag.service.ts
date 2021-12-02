import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, Tag } from '../modal/Modal';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  constructor(private http: HttpClient) {}

  addTagToProduct(idProduct: number, idTag: number): Observable<Product> {
    return this.http.post<Product>(`http://localhost:8082/api/addTagToProduct/${idProduct}/${idTag}`, null);
  }
  addTagToBoutique(tag : Tag , idBoutique: number): Observable<Tag> {
    return this.http.post<Tag>(`http://localhost:8082/api/addTagToBoutique/${idBoutique}`, tag);
  }

  deleteTagFormProduct(idProduct: number, idTag: number): Observable<Product> {
    return this.http.delete<Product>(`http://localhost:8082/api/deleteTagFromProduct/${idProduct}/${idTag}`);
  }

  deleteTag(idTag: number): Observable<Tag> {
    return this.http.delete<Tag>(`http://localhost:8082/api/deleteTag/${idTag}`);
  }

  findTagById(id: number): Observable<Tag> {
    return this.http.get<Tag>(`http://localhost:8082/api/findTagById/${id}`);
  }

  editTag(tag: Tag, id: number): Observable<Tag> {
    return this.http.put<Tag>(`http://localhost:8082/api/editTag/${id}`, tag);
  }

  addTag(tag: Tag): Observable<Tag> {
    return this.http.post<Tag>(`http://localhost:8082/api/addTag`, tag);
  }
  RongTagToBoutique(tags: Tag[]): Observable<Tag[]> {
    return this.http.post<Tag[]>(`http://localhost:8082/api/RongTagsToBoutique`, tags);
  }
 
  
  findTagsForProduct(idProduct: number): Observable<Tag[]> {
    return this.http.get<Tag[]>(`http://localhost:8082/api/findTagsForProduct/${idProduct}`);
  }
  findTagsForBoutique(idBoutique: number): Observable<Tag[]> {
    return this.http.get<Tag[]>(`http://localhost:8082/api/findTagsForBoutique/${idBoutique}`);
  }
  findAllTags(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8082/api/findAllTags`);
  }
  findAllTagByName(name: string): Observable<Tag[]> {
    return this.http.get<Tag[]>(`http://localhost:8082/api/findAllTagByName/${name}`);
  }

  findProductsForTag(idTak: number): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:8082/api/findProductsForTag/${idTak}`);
  }
}
