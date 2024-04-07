// Assuming there are TypeScript files for each of these Java classes or similar TypeScript types.
// If not, you'd need to define the necessary types in TypeScript as well.
import { CuisineType } from "../data/CuisineType";
import { MealType } from "../data/MealType";
import { Restaurant } from "../data/Restaurant";
import { StarRating } from "../data/StarRating";
import { CuisinesTypeFilter } from "../filters/CuisinesTypeFilter";
import { MealTypeFilter } from "../filters/MealTypeFilter";
import { RestaurantFilter } from "../filters/RestaurantFilter";
import { StarRatingFilter } from "../filters/StarRatingFilter";
import { RestaurantSearcher } from "../searchers/RestaurantSearcher";

export class RestaurantSearcherAPI {
  //Restaurent+Filter
  searchRestaurant(
    restaurantName: string,
    mealType: MealType | null,
    cuisineTypes: CuisineType[] | null,
    rating: StarRating | null
  ): Restaurant[] | null {
    // validations
    let filters: RestaurantFilter[] = [];
    if (mealType) filters.push(new MealTypeFilter(mealType));
    if (cuisineTypes) filters.push(new CuisinesTypeFilter(cuisineTypes));
    if (rating) filters.push(new StarRatingFilter(rating));

    let searcher = new RestaurantSearcher();
    return searcher.search(restaurantName, filters);
  }
}
