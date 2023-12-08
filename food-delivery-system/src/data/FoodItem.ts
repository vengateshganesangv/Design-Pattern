// Assuming there are TypeScript files or similar types for MealType, CuisineType, and StarRating.
// If not, you'll need to define these in TypeScript as well.
import { MealType } from "./MealType";
import { CuisineType } from "./CuisineType";
import { StarRating } from "./StarRating";

export class FoodItem {
  constructor(
    private readonly id: number,
    private readonly name: string,
    private readonly description: string,
    private readonly priceINR: number,
    private readonly mealType: MealType,
    private readonly cuisineType: CuisineType,
    private readonly starRating: StarRating,
    private readonly restaurantId: number,
    private readonly isAvailable: boolean
  ) {}

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getPriceINR(): number {
    return this.priceINR;
  }

  getMealType(): MealType {
    return this.mealType;
  }

  getCuisineType(): CuisineType {
    return this.cuisineType;
  }

  getStarRating(): StarRating {
    return this.starRating;
  }

  getRestaurantId(): number {
    return this.restaurantId;
  }

  getIsAvailable(): boolean {
    return this.isAvailable;
  }
}
