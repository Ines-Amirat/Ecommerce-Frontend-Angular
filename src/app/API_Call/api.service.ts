import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

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
    
    const headers =new HttpHeaders().set('Authorization' ,`Bearer ${token}`);
    
    return this.http.post(
         `${this.apiURL}/cart/add`,
         {productId :id},
         {headers}
      
    )
  }



}
