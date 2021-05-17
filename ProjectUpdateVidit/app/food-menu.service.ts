import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { FoodMenu } from './food-menu';

@Injectable({
  providedIn: 'root'
})
export class FoodMenuService {
  
  constructor(private _http : Http) { }
  showFoodItem() : Observable<FoodMenu[]> {
    return this._http.get("http://localhost:8080/RestDbFood/webapi/fooditem").
    map((res:Response)=>res.json())
  }
}
