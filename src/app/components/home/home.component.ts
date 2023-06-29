import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from 'src/app/services/foodservice.service';
import { Foods } from 'src/app/shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];

  constructor(
    private fs: FoodserviceService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchItem']) {
        this.fs.getAllFoodsBySearchTerm(params['searchItem']).subscribe(
          foods => {
            this.foods = foods;
           
          }
        );
      } else if (params['tag']) {
        this.fs.getAllFoodByTag(params['tag']).subscribe(
          foods => {
            this.foods = foods;
        
          }
        );
      } else {
        this.fs.getAll().subscribe(
          foods => {
            this.foods = foods;
           
          }
        );
      }
    });
  }
  

  

  addToCart(food: Foods): void {
    this.cartService.addToCart(food);
    this.router.navigateByUrl('/cart');
 

  }
}