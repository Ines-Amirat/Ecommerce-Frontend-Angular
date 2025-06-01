import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartProduct } from 'src/app/models/CartProduct';
import { Product } from 'src/app/models/Product';
import { CartProductService } from 'src/app/services/cart-product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  products: Product[] = [];
  cartProductsList : CartProduct[] = [];
  constructor(private cartProductService: CartProductService ) { }
  
  ngOnInit(): void {
     
    let token_user = localStorage.getItem('token');

    if (token_user) {
      this.cartProductService.cartProductsList(token_user)
      .subscribe({
        next: (cartProducts) => {
          this.cartProductsList = cartProducts;
          this.products = this.cartProductsList.map (element  => element.product);
          console.log(this.products);
        },
        error: (error) => {
          console.log(error);
        }

      });
    }

  
  }

 
}
