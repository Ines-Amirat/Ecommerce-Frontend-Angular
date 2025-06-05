import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { CartProduct } from '../models/CartProduct';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  loginClient(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/auth/login`, { email, password });
  }

  registerClient(name: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/auth/register`, { name, email, password });
  }

  getProducts(): Observable<any> {
    return this.http.get<Product[]>(`${this.apiURL}/product`);
  }

  getProductById(id:number): Observable<any> {
    return this.http.get<Product>(`${this.apiURL}/product/${id}`);
  }
  
  AddProductCart(id:number,token:string): Observable<any> {
    console.log("dehduehidueh")
    const headers =new HttpHeaders().set('Authorization' ,`Bearer ${token}`);
    return this.http.post(
         `${this.apiURL}/cartProduct/add`,
         {productId :id},
         {headers}
      
    );
  }

  getCartProducts(token:string): Observable<any> {
    const headers =new HttpHeaders().set('Authorization' ,`Bearer ${token}`);
    return this.http.post<CartProduct[]>( 
        `${this.apiURL}/cartProduct/get`,
         {},
         {headers}
    );
  }

  getCategories(): Observable<any>{
      return this.http.get<Category[]>(`${this.apiURL}/categories/get`);
  }


  getFeaturedProducts(): Observable<any> {
    return this.http.get<Product[]>(`${this.apiURL}/product/getFeatured`);
  }



}
