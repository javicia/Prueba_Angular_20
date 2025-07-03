import { computed, inject, Injectable, signal } from '@angular/core';
import { Product } from '@features/products/product.interface';
import { ToastrService } from 'ngx-toastr';
import { CartCalculatorService } from 'src/app/store/cart-state/cart-calculator.service';

export interface CartStore {
  products: Product[];
  totalAmount: number;
  productsCount: number;
}

export const initialCartState: CartStore = {
  products: [],
  totalAmount: 0,
  productsCount: 0,
};

@Injectable({ providedIn: 'root' })
export class CartStateService {
  
  private readonly _cartCalculatorService = inject(CartCalculatorService);
  private readonly _toastrService = inject(ToastrService);

  private readonly _product = signal<Product[]>([]);
  // Implementar computed signal para totalAmount y otra para productCount
  readonly totalAmount = computed(() => this._cartCalculatorService.calculateTotal(this._product()));
  readonly productsCount = computed(() => this._cartCalculatorService.calculateItemsCount(this._product())
  );
 
  //Implementar computed signal para el estado completo del carrito
  readonly cartStore = computed(() => ({
    products: this._product(),
    totalAmount: this.totalAmount(),
    productsCount: this.productsCount(),
  }));
  
  addToCart(product: Product): void {
    const currentproducts = this._product();
    const existingProductIndex = currentproducts.findIndex(
      (p:Product) => p.id === product.id
    );
    if (existingProductIndex >= 0) {
      currentproducts[existingProductIndex] = {
        ...product,
        quantity: (currentproducts[existingProductIndex].quantity || 0) + 1,
      };
      this._product.set(currentproducts);
    } else {
      this._product.update((products:Product[]) => [
        ...products, { ...product, quantity: 1}])
    }
   
  }

  removeFromCart(productId: number): void {
    try{
      if (!productId) {
       throw new Error('Product ID is required to remove a product from the cart.');
      }
      const currentProduct = this._product();
      const productExists = currentProduct.some(
        (p:Product) => p.id === productId);

        if (!productExists) {
          this._toastrService.warning('Product not found in the cart.');
          return;
        } 
        this._product.update((products:Product[]) =>
          products.filter((p:Product) => p.id !== productId)
        );
        this._toastrService.success('Product removed!!', 'DOMINI STORE');
    } catch(error){
      console.error('Error removing product from cart:', error);
      this._toastrService.error('Failed to remove product from cart.', 'DOMINI STORE');
    }
    
  }

  clearCart(): void {
    this._product.set([]);
    this._toastrService.success('All Products removed!', 'DOMINI STORE');
  }
}
