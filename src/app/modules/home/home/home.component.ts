import { Component } from '@angular/core';
import{ Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
      categories : Category[] = [];

      constructor (private categoryService :CategoryService){}

      ngOnInit() : void{
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
      }
}
