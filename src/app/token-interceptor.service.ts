import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Injector} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req,next)
  {
    let authService=this.injector.get(AuthService);
    let tokenizedReq=req.clone({
      setHeaders:{
        Authorization:`bearer ${authService.gettoken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
