import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodMenu } from '../food-menu';
import { FoodMenuService } from '../food-menu.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  food : Observable<FoodMenu[]>;
  constructor(private _foodmenuservice :FoodMenuService) { 
    this.food=this._foodmenuservice.showFoodItem();
  }

  ngOnInit(): void {
  }

}
