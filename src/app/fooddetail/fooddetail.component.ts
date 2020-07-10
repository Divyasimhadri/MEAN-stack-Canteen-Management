
import { Component, OnInit, Input, EventEmitter,Output} from '@angular/core';
@Component({
  selector: 'food-detail',
  templateUrl: './fooddetail.component.html',
  styleUrls: ['./fooddetail.component.css']
})
export class FooddetailComponent implements OnInit {
@Input() food;
@Output() upadteFoodEvent= new EventEmitter();
@Output() deleteFoodEvent=new EventEmitter();
public editTitle:boolean =false;
  constructor() { }
  onTitleClick()
  {
    this.editTitle=true;
  }
  upFood()
  {
    this.upadteFoodEvent.emit(this.food);
  }
  delFood()
  {
    this.deleteFoodEvent.emit(this.food);
  }
  
  ngOnChanges()
  {
    this.editTitle=false;
  }
  ngOnInit(): void {
  }

}
