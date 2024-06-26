import { FoodItem } from "../data/FoodItem";
import { Restaurant } from "../data/Restaurant";
import { StarRating } from "../data/StarRating";
import { FoodItemFilter } from "./FoodItemFilter";
import { RestaurantFilter } from "./RestaurantFilter";

export class StarRatingFilter implements FoodItemFilter, RestaurantFilter {
  constructor(private readonly rating: StarRating) {}

  filterByFoodItem(foodItem: FoodItem): boolean {
    return foodItem.getStarRating() >= this.rating;
  }

  filterByRestaurant(restaurant: Restaurant): boolean {
    return restaurant.getRating() >= this.rating;
  }
}
