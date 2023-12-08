import { FoodItem } from "../data/FoodItem";

export interface FoodItemFilter {
  filterByFoodItem(foodItem: FoodItem): boolean;
}
