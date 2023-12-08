import { BusinessHours } from "./BusinessHours";
import { MealType } from "./MealType";
import { CuisineType } from "./CuisineType";
import { StarRating } from "./StarRating";
import { Menu } from "./Menu";
import { Address } from "./Address";

export class Restaurant {
  constructor(
    private readonly id: number,
    private readonly name: string,
    private readonly description: string,
    private readonly businessHours: BusinessHours,
    private readonly mealType: MealType,
    private readonly cuisineTypes: CuisineType[],
    private readonly rating: StarRating,
    private readonly menu: Menu,
    private readonly address: Address
  ) {}

  getAddress(): Address {
    return this.address;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getBusinessHours(): BusinessHours {
    return this.businessHours;
  }

  getMealType(): MealType {
    return this.mealType;
  }

  getCuisineTypes(): CuisineType[] {
    return this.cuisineTypes;
  }

  getRating(): StarRating {
    return this.rating;
  }

  getMenu(): Menu {
    return this.menu;
  }
}
