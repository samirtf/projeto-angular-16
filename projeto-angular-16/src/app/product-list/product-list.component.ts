import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  name = "John Doe"
  product = {
    name: "iPhone 13",
    price: 789,
    color: 'Red',
    discount: 8.5,
    inStock: 5,
    pImage: '/assets/images/iphone.png'
  }

  getDiscountedPrice() {
    return (this.product.price - (this.product.price * this.product.discount / 100))
  }

}
