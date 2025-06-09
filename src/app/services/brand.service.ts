import { Injectable } from '@angular/core';
import { ApiService } from '../API_Call/api.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

 constructor(private apiService : ApiService) { }
   
  getBrand(): Observable<any>{
      return this.apiService.getBrand();
  }

}
