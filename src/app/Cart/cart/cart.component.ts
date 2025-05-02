import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  products: Product[] = [];
  constructor(private ProductService: ProductService) { }
  
  ngOnInit(): void {

    let email = localStorage.getItem('email');
    const products_string = localStorage.getItem(`panier_${email}`);
    if (products_string) {
      this.products = JSON.parse(products_string);
    }
    console.log(this.products);


  }

 
}
