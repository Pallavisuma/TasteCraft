import { Injectable } from '@angular/core';
import {Foods} from 'src/app/shared/models/food';
import { Tag } from '../shared/models/Tag';
import { sample_foods, sample_tags } from 'src/data';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Foods[]> {
    return this.http.get<Foods[]>("http://127.0.0.1:8000/cupcake/display");
  }

  getAllFoodsBySearchTerm(searchTerm: string): Observable<Foods[]> {
    return this.getAll().pipe(
      map((foods: any[]) => foods.filter((food: { name: string; }) => food.name.toLowerCase().includes(searchTerm.toLowerCase())))
    );
  }

  getAllTag(): Tag[] {
    return sample_tags;
  }

  getAllFoodByTag(tag: string): Observable<Foods[]> {
    return this.getAll().pipe(
      map((foods: any[]) => tag === "All" ? foods : foods.filter((food: { tags: string | string[]; }) => food.tags?.includes(tag)))
    );
  }

  getFoodById(foodId: string): Observable<Foods> {
    return this.getAll().pipe(
      map((foods: any[]) => foods.find((food: { id: { toString: () => string; }; }) => food.id.toString() == foodId) ?? new Foods())
    );
  }
}