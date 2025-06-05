import { Component, ElementRef, ViewChild } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  categories: Category[] = [];
  products : Product[] =[];

  constructor(private categoryService: CategoryService , private productService : ProductService ) { }

  ngOnInit(): void {
    this.categoryService.getCategories()
      .subscribe({
        next: (data) => {
          this.categories = data;
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        }
      });
    
      this.productService.featuredProducts()
       .subscribe({
          next: (data) => {
          this.products = data;
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        }
       })

  }
  @ViewChild('scrollContainer', { read: ElementRef }) scrollContainer!: ElementRef;
  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }
  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }
}
