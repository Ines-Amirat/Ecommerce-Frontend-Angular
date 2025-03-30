import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {ActivatedRoute} from '@angular/router';
import { Product } from 'src/app/models/Product';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product!:Product ;
  constructor(private ProductService: ProductService,private route:ActivatedRoute){}

  ngOnInit() :void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ProductService.getProductById(id)
        .subscribe({
           next: (product)  =>{
              this.product = product;
              console.log(product);
           },
           error: (error) =>{
              console.log(error);
           }
           
        });
  }
}
