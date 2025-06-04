import { Injectable } from '@angular/core';
import { ApiService } from '../API_Call/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(private apiService : ApiService) { }

  getCategories(): Observable<any>{
        return this.apiService.getCategories();
    }
}
