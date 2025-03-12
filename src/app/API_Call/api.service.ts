import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL = 'http://localhost:8080/auth';
  constructor(private http: HttpClient) { }

  loginClient(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/login`, { email, password });
  }

  registerClient(name: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/register`, { name, email, password });
  }


}
