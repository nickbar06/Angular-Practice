import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-quick-buy',
  templateUrl: './quick-buy.component.html',
  styleUrls: ['./quick-buy.component.css'],
})
export class QuickBuyComponent implements OnInit {
  @Input() product!: Product;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  quickBuy(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
