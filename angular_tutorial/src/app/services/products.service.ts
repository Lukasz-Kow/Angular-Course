import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { PaginationParams, Products } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiSerice: ApiService) { }

  getProducts = (url: string, params: PaginationParams): Observable<Products> => {
    return this.apiSerice.get(url, {
      params,
      responseType: 'json'
    })
  }

  addProduct = (url: string, body: any): Observable<any> => {
    return this.apiSerice.post(url, body, {})
  }

  editProduct = (url: string, body: any): Observable<any> => {
    return this.apiSerice.put(url, body, {})
  }

  deleteProduct = (url: string): Observable<any> => {
    return this.apiSerice.delete(url, {})
  }
}
