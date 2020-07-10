import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _authservice: AuthService,private _router:Router) { }
 
  ngOnInit(): void {
  }
  register(form) {
    this._authservice.registerUser(form.value).subscribe(res=>{
      console.log(res)
    localStorage.setItem('token',res.token)
    this._router.navigate(['/food'])},
    err=>console.log(err));
      
  }
}
