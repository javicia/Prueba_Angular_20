import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartStateService } from '@store/cart-state/cart-state.service';

import { CardComponent } from './card/card.component';
import { Product } from './product.interface';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  styleUrl: './products.component.scss',
  templateUrl: 'products.component.html',
})
export default class ProductsComponent implements OnInit {
  private readonly _route = inject(ActivatedRoute);
  private readonly _productsService = inject(ProductsService);
  private readonly _cartService: CartStateService = inject(CartStateService);

  products = this._productsService.products;

  ngOnInit() {
    this._route.queryParams.subscribe((params) => {
      const category = params['category'] || 'all';
      this._productsService.filterProductsByCategory(category);
    });
  }

  onAddToCart(product: Product): void {
    this._cartService.addToCart(product);
  }
}
