import { FoodItem } from "../data/FoodItem";
import { MealType } from "../data/MealType";
import { Restaurant } from "../data/Restaurant";
import { FoodItemFilter } from "./FoodItemFilter";
import { RestaurantFilter } from "./RestaurantFilter";

export class MealTypeFilter implements FoodItemFilter, RestaurantFilter {
  constructor(private readonly mealType: MealType) {}

  filterByFoodItem(foodItem: FoodItem): boolean {
    return foodItem.getMealType() === this.mealType;
  }

  filterByRestaurant(restaurant: Restaurant): boolean {
    return restaurant.getMealType() === this.mealType;
  }
}
