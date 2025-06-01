import { Injectable } from '@angular/core';
import { ApiService } from '../API_Call/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartProductService {

  constructor(private apiService: ApiService) { }

  AddProductCart(id:number,token:string): Observable<any>{
    return this.apiService.AddProductCart(id,token);
  }

  cartProductsList(token :string):Observable<any> {
    return this.apiService.getCartProducts(token);
  }
}
