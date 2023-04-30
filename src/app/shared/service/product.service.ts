import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly httpClient: HttpClient) {}

  products: Product[] = [];

  productOverview: Product = {} as Product;

  getAllProducts() {
    return this.httpClient.get<Product[]>('assets/products.json').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  setProductOverview(product: Product) {
    this.productOverview = product;
  }

  getProductOverview() {
    return this.productOverview;
  }
}
