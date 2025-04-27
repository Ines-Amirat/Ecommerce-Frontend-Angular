import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/API_Call/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { }

  loginClient(email: string, password: string):Observable<any> {
      return this.apiService.loginClient(email, password);
      
  }

  register(name:string,email: string, password: string):Observable<any> {
    return this.apiService.registerClient(name,email, password);
      
  }

}
