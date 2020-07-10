import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooddetailComponent } from './fooddetail.component';

describe('FooddetailComponent', () => {
  let component: FooddetailComponent;
  let fixture: ComponentFixture<FooddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
