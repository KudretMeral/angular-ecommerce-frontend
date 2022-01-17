import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {




  private categoryUrl = 'http://localhost:9090/product-category/getAll';

  //private baseUrl='http://localhost:9090/product/getAll';

  constructor(private httpClient: HttpClient) { }

  getProduct(theProductId: number): Observable<Product> {

    const productUrl = `http://localhost:9090/product/getProduct/${theProductId}`;
  return this.httpClient.get<Product>(productUrl);
  }
  getProductList(theCategoryId: number): Observable<Product[]> {

    const searchUrl = `http://localhost:9090/product/findByCategoryId?id=${theCategoryId}`;


    return this.getProducts(searchUrl);


  }


  searchProducts(theKeyword: string): Observable<Product[]> {

    const searchUrl = `http://localhost:9090/product/search?name=${theKeyword}`;



    return this.getProducts(searchUrl);

  }



  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProduct>(searchUrl).pipe(
      map(response => response.products)
    );
  }

  getProductCategories(): Observable<ProductCategory[]> {

    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response.productCategory)
    );

  }

}


interface GetResponseProduct {


  products: Product[];

}


interface GetResponseProductCategory {


  productCategory: ProductCategory[];

}