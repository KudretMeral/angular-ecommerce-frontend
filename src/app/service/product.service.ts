import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private baseUrl='http://localhost:9090/product/getAll';
  constructor(private httpClient:HttpClient) { }


  getProductList(): Observable<Product[]>
  {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
map(response => response.products)
);

  }
}


interface GetResponse{

  
    products:Product[];
  
}