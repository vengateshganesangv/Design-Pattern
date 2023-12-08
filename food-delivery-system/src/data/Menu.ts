import { FoodItem } from "./FoodItem";

export class Menu {
  constructor(private readonly foodItems: FoodItem[]) {}

  getFoodItems(): FoodItem[] {
    return this.foodItems;
  }
}
