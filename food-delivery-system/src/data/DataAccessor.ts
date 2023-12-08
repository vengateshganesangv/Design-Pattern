import { User } from "./User";
import { FoodItem } from "./FoodItem";
import { DataAccessResult } from "./DataAccessResult";
import { CartItem } from "./CartItem";

export class DataAccessor {
  private constructor() {}

  public static addItemToCart(user: User, foodItem: FoodItem): void {
    // Implementation here
  }

  public static getFoodItemsWithName(name: string): DataAccessResult | null {
    return null; // Placeholder
  }

  public static getCart(user: User): DataAccessResult | null {
    return null; // Placeholder
  }

  public static deleteItemFromCart(user: User, foodItem: FoodItem): void {
    // Implementation here
  }

  public static checkOutCart(user: User): void {
    // Implementation here
  }

  public static createOrder(user: User, cartItems: CartItem[]): number {
    return 1; // Placeholder
  }
}
