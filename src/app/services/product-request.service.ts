import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProductRequest } from '../models/product-request';

@Injectable({
  providedIn: 'root'
})
export class ProductRequestService {
  URL: string = 'http://localhost:3000/productRequests'
  constructor(private http: HttpClient) { }

  getAllProductReqeusts(): Observable<Array<ProductRequest>> {
    return this.http.get<Array<ProductRequest>>(`${this.URL}`);
  }

  saveProductRequest(productRequest: ProductRequest): Observable<ProductRequest> {
    return this.http.post<ProductRequest>(`${this.URL}`, productRequest)
  }

}
