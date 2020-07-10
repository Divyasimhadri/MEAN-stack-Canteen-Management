import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs/observable';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient,private _router:Router) { }
  private _url="http://localhost:3000/api/register";
  private _purl="http://localhost:3000/api/login";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  registerUser(user:User)
  {
    return this.http.post<User>(this._url,user,this.httpOptions);
  }
  signinUser(user:User)
  {
    return this.http.post<User>(this._purl,user,this.httpOptions);
  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  gettoken()
  {
    return localStorage.getItem('token')
  }
  logoutUser()
  {
    localStorage.removeItem('token')
    this._router.navigate(['/home'])
  }
}
