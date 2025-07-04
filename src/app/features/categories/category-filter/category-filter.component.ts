import { AsyncPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '@features/categories/categories.service';
import { CategoryButtonComponent } from '../categoty-button/category-button.component';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [AsyncPipe, CategoryButtonComponent],
  styleUrl: './category-filter.component.scss',
  template: `
    <h2 class="heading">
      <span class="highlight">Popular</span>
      categories
    </h2>
    <ul class="list-container">
      <li>
       <app-category-button category="ALL" [(filterCategory)]="selectedCategory"/>
      </li>
       @for (category of categories$ | async; track category;) {
      <li>
        <app-category-button [category]="category" [(filterCategory)]="selectedCategory"/>
      </li>
       }
    </ul>
  `,
})
export class CategoryFilterComponent {
  readonly categories$ = inject(CategoryService).categories$;

  private readonly _router = inject(Router);
  selectedCategory = signal<string>('all');

  onClick(category: string): void {
    this._router.navigate([], {
      queryParams: { category: category === 'all' ? null : category },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }
}
