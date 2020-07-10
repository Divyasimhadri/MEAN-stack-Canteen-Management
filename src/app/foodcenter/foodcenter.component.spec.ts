import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodcenterComponent } from './foodcenter.component';

describe('FoodcenterComponent', () => {
  let component: FoodcenterComponent;
  let fixture: ComponentFixture<FoodcenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodcenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
