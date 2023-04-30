import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './modules/cart/checkout/checkout.component';
import { ShoppingCartComponent } from './modules/cart/shopping-cart/shopping-cart.component';
import { ContactUSComponent } from './modules/contact-us/contact-us.component';
import { HomeComponent } from './modules/home/home.component';
import { ProductListComponent } from './modules/shop/product-list/product-list.component';
import { ProductOverviewComponent } from './modules/shop/product-overview/product-overview.component';
import {
  AppRoutes,
  cartRoutes,
  productRoutes,
} from './shared/enums/routes.enum';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: productRoutes.ProductOverView,
    component: ProductOverviewComponent,
  },
  {
    path: productRoutes.ProductList,
    component: ProductListComponent,
  },
  {
    path: cartRoutes.Checkout,
    component: CheckoutComponent,
  },
  {
    path: cartRoutes.ShoppingCart,
    component: ShoppingCartComponent,
  },
  {
    path: AppRoutes.Contact,
    component: ContactUSComponent,
  },
  {
    path: AppRoutes.Home,
    component: HomeComponent,
  },
  {
    path: AppRoutes.Empty,
    component: HomeComponent,
  },
  {
    path: AppRoutes.Other,
    redirectTo: AppRoutes.NotFound,
  },
  {
    path: AppRoutes.NotFound,
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
