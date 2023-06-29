import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodserviceService } from 'src/app/services/foodservice.service';
import { Foods } from 'src/app/shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {
  food!: Foods;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodserviceService
  ) {
    activatedRoute.params.subscribe(params => {
      if (params['id']) {
        foodService.getFoodById(params['id']).subscribe(
          food => this.food = food
        );
      }
    });
  }
}
