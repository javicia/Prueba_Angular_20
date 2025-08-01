import { Injectable } from '@angular/core';
import { CartStore } from './cart-state.service';
@Injectable({ providedIn: 'root' })
export class CartStorageService {
  private readonly STORAGE_KEY = 'cart_state';

  //Cargar el estado del carrito desde el localStorage
  loadState(): CartStore | null {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Error loading cart state:', error);
      return null;
    }
  }
  //Guardar el estado del carrito en el localStorage
  saveState(state: CartStore): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error('Error saving cart state:', error);
    }
  }
}
