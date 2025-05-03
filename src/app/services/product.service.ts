import { Injectable } from '@angular/core';
import { ApiService } from '../API_Call/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  constructor(private apiService: ApiService) { }

   ProductsList():Observable<any> {
      return this.apiService.getProducts();
        
   }

   getProductById(id: number):Observable<any> {
    return this.apiService.getProductById(id);
      
   }
   
   AddProductCart(id:number,token:string){
     return this.apiService.AddProductCart(id,token);
   }
  
}
