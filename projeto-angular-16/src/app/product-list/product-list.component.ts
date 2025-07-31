import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  product = {
    name: "iPhone 13",
    price: 789,
    color: 'Red',
    discount: 8.5,
    inStock: 5
  }

  getDiscountedPrice() {
    return (this.product.price - (this.product.price * this.product.discount / 100))
  }

}
