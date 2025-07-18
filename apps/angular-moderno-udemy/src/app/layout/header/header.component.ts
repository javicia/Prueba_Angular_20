import { CurrencyPipe, NgClass, SlicePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
// Update the import path below if the file exists at a different location
import { CartStore } from '@store/cart-state/cart-state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, SlicePipe, CurrencyPipe, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  cart = input.required<CartStore | null>();
  showCart = false;
}
