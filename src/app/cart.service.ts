import { Injectable } from '@angular/core';
import { Product, products } from './products';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products!: Product[];
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product: Product) {
    if(product.stock >= 1) {
      this.items.push(product);
      product.stock -= 1;
    }
  }

  getCart() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
