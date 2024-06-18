import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

import { Form, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }
  
  ngOnInit(): void {
  }

  items = this.cartService.getCart();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  onSubmit(): void {
    let itemsBought = this.cartService.getCart().map(prod => prod.name).join(", ");
    alert(`Thank you ${this.checkoutForm.value.name} for your order of a ${itemsBought}`);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
