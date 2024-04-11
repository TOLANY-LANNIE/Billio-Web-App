import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environment/environment.development';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  base_url = environment.base_url /* Stores the base URL for the API */


  private budgets: any[] = [];

  constructor(private http: HttpClient) { }

/**
 * Pull Budget Documents from the API
 */
  retrieveBudgets(): Observable<any[]>{
    return this.http.get<any[]>(
      this.base_url + 'Budget'
    );
  }
}
