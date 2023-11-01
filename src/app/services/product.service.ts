import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  URL: string = 'http://localhost:3000/product'

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.URL)
  }

  getproduct(id?: number): Observable<Product> {
    // console.log(id);
    return this.http.get<Product>(`${this.URL}/${id}`);
  }

}
