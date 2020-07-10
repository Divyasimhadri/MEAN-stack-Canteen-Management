import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Food } from '../food';
@Component({
  selector: 'food-list',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {
  @Output() public selectFood=new EventEmitter();
  @Input() public foods;
  constructor() { }

  ngOnInit(): void {
  }

  onselect(food: Food)
  {
    this.selectFood.emit(food);
  }

}
function newFunction(): string {
  return 'foods';
}

