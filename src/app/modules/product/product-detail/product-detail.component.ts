import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product!: Product;
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

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
    let email = localStorage.getItem('email');
    let token_user = localStorage.getItem(`token_${email}`);

    if (token_user) {
      this.productService.AddProductCart(id, token_user);
    }


  }
}
