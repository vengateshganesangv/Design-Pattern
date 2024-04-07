import { FoodItem } from "../data/FoodItem";
import { MealType } from "../data/MealType";
import { CuisineType } from "../data/CuisineType";
import { StarRating } from "../data/StarRating";

export class FoodItemSearcherAPI {
  //FoodSearcher+Filter
  searchFoodItems(
    foodItemName: string,
    mealType: MealType,
    cuisines: CuisineType[],
    rating: StarRating
  ): FoodItem[] {
    return [];
  }
}
