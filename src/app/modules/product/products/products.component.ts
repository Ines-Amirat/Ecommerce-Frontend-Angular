import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import {Router} from '@angular/router';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';
import { SubCategory } from 'src/app/models/SubCategory';
import { BrandService } from 'src/app/services/brand.service';
import { Brand } from 'src/app/models/Brand';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = [];
  categories : Category[] = [];
  subCategories : SubCategory[] =[];
  brand : Brand[] =[];
  expanded? :boolean;
  showBrand: boolean =false;

  constructor(private ProductService: ProductService,private categoryService: CategoryService ,
     private router:Router , private subCategoryService:SubCategoryService , private brandService: BrandService) { }

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

    this.categoryService.getCategories()
      .subscribe({
        next: (data) => {
          this.categories = data;
          this.categories = data.map( (cat: any) => ({
             ...cat,
             expanded : false 
          }));
        },
        error: (error) => {
          console.log(error);
        }
      });
    
  }
  goToProduct(id : number){
    this.router.navigate(['products',id]);
  }

  toggleCategory(cat:Category){
      cat.expanded = !cat.expanded;
      this.subCategoryService.getSubCategories(cat.idCategory)
         .subscribe({
             next: (data)  =>{ 
                  this.subCategories = data;
                  console.log(data)
             },
             error : (error) => {
                 console.log(error)
             }     
         })
  }


   toggleBrand(){
      this.showBrand =  !this.showBrand;
      this.brandService.getBrand()
         .subscribe({
             next: (data)  =>{ 
                  this.brand = data;
                  console.log(data)
             },
             error : (error) => {
                 console.log(error)
             }     
         })
  }
  


 
}

