import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/items/products';

// @Component({
//   selector: 'app-product-alerts',
//   standalone: true,
//   imports: [],
//   templateUrl: './product-alerts.component.html',
//   styleUrl: './product-alerts.component.css'
// })
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}