import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Food} from './food';
import {Observable} from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }
  private _geturl:string="http://localhost:3000/api/food";
  private _puturl:string="http://localhost:3000/api/food/";
  private _delurl:string="http://localhost:3000/api/food/";
  private _posturl : string="http://localhost:3000/api/food";
  getFood():Observable<Food[]>
  {
    return this.http.get<Food[]>(this._geturl);    
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  updateFood(food:Food)
  {
    return this.http.put(this._puturl+food._id,food,this.httpOptions);
  }
  deleteFood(food:Food)
  {
    return this.http.delete(this._delurl+food._id);
  }
  addFood(food:Food)
  {
    return this.http.post<Food>(this._posturl,food,this.httpOptions);
  }
   
  }

