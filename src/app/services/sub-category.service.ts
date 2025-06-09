import { Injectable } from '@angular/core';
import { ApiService } from '../API_Call/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private apiService : ApiService) { }
  
    getSubCategories(id:number): Observable<any>{
          return this.apiService.getSubCategoryByCat(id);
      }
}
