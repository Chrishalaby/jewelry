import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { PanelModule } from 'primeng/panel';
import { RatingModule } from 'primeng/rating';
import { TabViewModule } from 'primeng/tabview';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/service/cart.service';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss'],
  standalone: true,
  imports: [
    TabViewModule,
    InputNumberModule,
    PanelModule,
    RatingModule,
    ButtonModule,
    CommonModule,
  ],
})
export class ProductOverviewComponent implements OnInit {
  productOverview!: Product;
  mainImage!: string;

  ringSizeCountry = ['US', 'UK', 'EU'];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productOverview = this.productService.getProductOverview();
    this.mainImage = this.productOverview.image[0];
  }

  swapImage(image: string): void {
    this.mainImage = image;
  }

  addToCart(): void {
    this.cartService.addToCart(this.productOverview);
  }
}
