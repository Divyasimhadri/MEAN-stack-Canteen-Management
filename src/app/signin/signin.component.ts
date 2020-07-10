import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private _authservice: AuthService,private _router:Router) { }

  ngOnInit(): void {
  }
  signin(form)
  {
    this._authservice.signinUser(form.value).subscribe(res=>{
      console.log(res)
      localStorage.setItem('token',res.token)
      this._router.navigate(['/food'])},
      err=>console.log(err))
  }


}
