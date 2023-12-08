import { Restaurant } from "../data/Restaurant";

export interface RestaurantFilter {
  filterByRestaurant(restaurant: Restaurant): boolean;
}
