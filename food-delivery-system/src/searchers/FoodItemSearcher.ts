import { FoodItem } from "../data/FoodItem";
import { DataAccessResult } from "../data/DataAccessResult";
import { DataAccessor } from "../data/DataAccessor";
import { FoodItemFilter } from "../filters/FoodItemFilter";
// TODO: Implement and import DataAccessObjectConverter
// import { DataAccessObjectConverter } from './data/DataAccessObjectConverter';

export class FoodItemSearcher {
  search(foodItemName: string, filters: FoodItemFilter[]): FoodItem[] {
    if (!foodItemName || filters === null) {
      throw new Error("Missing params");
    }

    const dataAccessResult: DataAccessResult =
      DataAccessor.getFoodItemsWithName(foodItemName);
    // TODO: Implement DataAccessObjectConverter
    let foodItems: FoodItem[] = []; // Temporary initialization
    // let foodItems: FoodItem[] = DataAccessObjectConverter.convertToFoodItems(dataAccessResult);

    for (let filter of filters) {
      const filteredFoodItems: FoodItem[] = [];
      for (let foodItem of foodItems) {
        if (filter.filterByFoodItem(foodItem)) {
          filteredFoodItems.push(foodItem);
        }
      }
      foodItems = filteredFoodItems;
    }

    return foodItems;
  }

  searchById(id: number): FoodItem {
    // TODO: Implement this function.
    return {} as FoodItem; // Temporary stub.
  }
}
