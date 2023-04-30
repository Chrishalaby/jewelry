import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayModule } from 'primeng/overlay';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/service/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  standalone: true,
  imports: [
    OverlayModule,
    DropdownModule,
    ButtonModule,
    CardModule,
    RouterLink,
    CommonModule,
  ],
})
export class ShoppingCartComponent implements OnInit {
  cart: Product[] = [];

  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.totalPrice = this.getTotal();
  }

  removeFromCart(product: Product): void {
    this.cartService.removeItem(product);
    // this.cart = this.cart.filter((item) => item.id !== product.id);
    this.cart = this.cartService.getCart();
  }

  getTotal(): number {
    return this.cart.reduce((acc, item) => acc + item.attributes.price, 0);
  }
}
