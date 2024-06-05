import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    console.log('Searching for:', searchTerm); // Log the search term
    return this.getAll().filter(food => {
      if (food && food.name) {
        return food.name.toLowerCase().includes(searchTerm.toLowerCase());
      } else {
        console.warn('Undefined food or food name:', food);
        return false;
      }
    });
  }

  getFoodById(foodId:string): Food{
    return this.getAll().find(food => food.id == foodId) ?? new Food();
  }
}
