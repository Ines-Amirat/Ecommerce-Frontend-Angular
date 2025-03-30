import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = [];

  categories = [
    { name: "Headphones" },
    { name: "Keyboards and Mice" },
    { name: "Smartwatches" },
    { name: "Chargers and Batteries" },
    { name: "PC Accessories" },
    { name: "Smartphone Accessories" },
  ];


  constructor(private ProductService: ProductService, private router:Router) { }

  ngOnInit(): void {
    this.ProductService.ProductsList()
      .subscribe({
        next: (data) => {
          this.products = data;
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        }
      });
      
  }

  goToProduct(id : number){
    this.router.navigate(['products',id]);
  }
 
}

