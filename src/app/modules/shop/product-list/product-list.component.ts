import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    SharedModule,
    CommonModule,
    HttpClientModule,
  ],
})
export class ProductListComponent {
  constructor(
    private productService: ProductService,
    private readonly router: Router
  ) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  showProductOverview(product: Product) {
    this.productService.setProductOverview(product);
    this.router.navigate(['/product-overview']);
  }
}
