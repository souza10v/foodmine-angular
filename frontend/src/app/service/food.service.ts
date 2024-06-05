import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';

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

  getFoodById(foodId: string): Food {
    return this.getAll().find(food => food.id == foodId) ?? new Food();
  }

  getAllTags(): Tag[] {
    return sample_tags
  }

  getAllFoodByTag(tag: string): Food[] {

    tag = tag.toLowerCase()

    console.log(tag);
    return tag === "all" ?
      this.getAll() :
      this.getAll().filter(food =>
        food.tags?.some(t => t.toLowerCase().includes(tag.toLowerCase()))
      );

  }
}
