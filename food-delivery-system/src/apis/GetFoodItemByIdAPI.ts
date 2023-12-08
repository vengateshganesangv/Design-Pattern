import { FoodItem } from "../data/FoodItem";
import { FoodItemSearcher } from "../searchers/FoodItemSearcher";

export class GetFoodItemByIdAPI {
  getFoodItemById(id: number): FoodItem | null {
    if (id < 0) {
      // Handle invalid id case here
      // e.g., throw an error or return a default response
    }
    // Possibly replace with the actual logic to get the food item by id
    return null;
  }
}
