// Assuming these imports are correct, based on a similar directory structure.
import { User } from "../data/User";
import { FoodItem } from "./data/FoodItem";
import { UserManager } from "./managers/UserManager";
import { CartManager } from "./managers/CartManager";
import { FoodItemSearcher } from "./searchers/FoodItemSearcher";

export class AddToCartAPI {
  private userManager: UserManager = new UserManager();
  private foodItemSearcher: FoodItemSearcher = new FoodItemSearcher();
  private cartManager: CartManager = new CartManager();

  public addToCart(userToken: string, foodItemId: number): void {
    if (!userToken || foodItemId < 0) {
      // Handle error or return
      return;
    }

    const user: User | null = this.userManager.getUserByToken(userToken);
    if (!user) {
      // Handle error or return
      return;
    }

    const foodItem: FoodItem | null =
      this.foodItemSearcher.searchById(foodItemId);
    if (!foodItem) {
      // Handle error or return
      return;
    }

    this.cartManager.addItemToCart(user, foodItem);
  }
}
