import { CuisineType } from "../data/CuisineType";
import { FoodItem } from "../data/FoodItem";
import { Restaurant } from "../data/Restaurant";
import { FoodItemFilter } from "./FoodItemFilter";
import { RestaurantFilter } from "./RestaurantFilter";

export class CuisinesTypeFilter implements FoodItemFilter, RestaurantFilter {
  constructor(private readonly cuisineTypes: CuisineType[]) {}

  filterByFoodItem(foodItem: FoodItem): boolean {
    return this.cuisineTypes.includes(foodItem.getCuisineType());
  }

  filterByRestaurant(restaurant: Restaurant): boolean {
    const cuisines = restaurant.getCuisineTypes();
    return this.cuisineTypes.some((cuisineType) =>
      cuisines.includes(cuisineType)
    );
  }
}
