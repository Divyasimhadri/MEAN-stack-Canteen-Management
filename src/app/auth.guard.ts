import { Injectable } from '@angular/core';
import { CanActivate, Router,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private _authserivce:AuthService,private _router :Router){}
  canActivate():boolean
  {
    if(this._authserivce.loggedIn())
    {
      return true;
    }
    else
    {
      this._router.navigate(['/register'])
      return false
    }
  }
  }
  

