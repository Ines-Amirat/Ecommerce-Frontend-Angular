import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartProductService } from 'src/app/services/cart-product.service';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product!: Product;
  cartProduct!: Product;
  constructor(private cartProductService: CartProductService,private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id)
      .subscribe({
        next: (product) => {
          this.product = product;
          console.log(product);
        },
        error: (error) => {
          console.log(error);
        }

      });
  }

  AddProduct() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    let token_user = localStorage.getItem('token');
    

    if (token_user) {
      this.cartProductService.AddProductCart(id, token_user)
      .subscribe({
         next: (cartProduct) => {
              this.cartProduct = cartProduct;
              console.log(this.cartProduct)
         },
         error: (error) =>{
              console.log(error)
         }
      })
    }


  }
}
