import { Restaurant } from "../data/Restaurant";
import { RestaurantFilter } from "../filters/RestaurantFilter";

export class RestaurantSearcher {
  search(
    restaurantName: string,
    filters: RestaurantFilter[]
  ): Restaurant[] | null {
    // Implementation here or replace with actual logic
    return null;
  }

  searchById(id: number): Restaurant | null {
    // Implementation here or replace with actual logic
    return null;
  }
}
