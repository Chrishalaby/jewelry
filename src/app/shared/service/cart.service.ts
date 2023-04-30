import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  myCart: Product[] = [];

  constructor() {}

  addToCart(product: Product): void {
    this.myCart.push(product);
  }

  getCart(): Product[] {
    return this.myCart;
  }

  clearCart(): Product[] {
    this.myCart = [];
    return this.myCart;
  }

  removeItem(product: Product): void {
    const index = this.myCart.indexOf(product);
    if (index > -1) {
      this.myCart.splice(index, 1);
    }
  }
}
