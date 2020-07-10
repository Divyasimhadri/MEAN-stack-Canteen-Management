import { Component, OnInit } from '@angular/core';
import { Food } from './../food';
import { FoodService } from '../food.service';
import {Router} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-foodcenter',
  templateUrl: './foodcenter.component.html',
  styleUrls: ['./foodcenter.component.css'],
  providers:[FoodService]
})

export class FoodcenterComponent implements OnInit {

  public foods=[];
  public selectFood:Food;
  public hideNewFood:boolean =true;
  newFood()
  {
    this.hideNewFood=false;
  }
  onselectFood(food:any)
  {
    this.selectFood=food;
    console.log(this.selectFood);
    this.hideNewFood=true;
  }
  
  constructor(private _foodService:FoodService,private _router : Router) { }
  
  ngOnInit() 
  {
    this._foodService.getFood().subscribe(data => this.foods=data);
    err=>{
      if(err instanceof HttpErrorResponse)
      {
        if(err.status===401)
        this._router.navigate(['/register'])
      }
    }
  }

  OnUpdateEvent(food : any)
  {
    this._foodService.updateFood(food).subscribe(data =>food =data);
    this.selectFood=null;
  }
  OnDeleteEvent(food :any)
  {
    let FoodArray=this.foods;
    this._foodService.deleteFood(food).subscribe(data =>{
      for(let i=0;i<FoodArray.length;i++)
      {
        if(FoodArray[i]._id===food._id)
        {
          FoodArray.slice(i,1);
        }
      }
    });
    this.selectFood=null;
    location.reload();
  }

  onSubmitAddFood(food:Food)
  {
    this._foodService.addFood(food).subscribe(data=>
      {
        this.foods.push(data);
        this.selectFood=data;
        this.hideNewFood=true;
  });
  }

}
