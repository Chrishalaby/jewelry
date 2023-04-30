import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { cartRoutes } from 'src/app/shared/enums/routes.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  items: MenuItem[] = [
    {
      label: 'Shop',
      icon: 'pi pi-fw pi-shopping-cart',
      routerLink: '/product-list',
    },
    {
      label: 'Gifts',
      icon: 'pi pi-fw pi-gift',
    },
    {
      label: 'About Us',
      icon: 'pi pi-fw pi-info-circle',
      routerLink: '/about',
    },
  ];

  constructor(private readonly router: Router) {}

  showCart() {
    this.router.navigate([cartRoutes.ShoppingCart]);
  }
}
