import { User, FoodItem } from "../data"; // Adjust the path if necessary.
import { Permission } from "./Permission"; // Assuming the Permission interface is in the same directory.
import { DeliveryManager } from "../managers/DeliveryManager"; // Adjust the path if necessary.
import { RestaurantSearcher } from "../searchers/RestaurantSearcher"; // Adjust the path if necessary.
import { Restaurant } from "../data/Restaurant"; // Adjust the path if necessary.

export class AddToCartPermission implements Permission {
  private readonly user: User;
  private readonly foodItem: FoodItem;
  private readonly deliveryManager: DeliveryManager;

  constructor(user: User, foodItem: FoodItem) {
    this.user = user;
    this.foodItem = foodItem;
    this.deliveryManager = new DeliveryManager();
  }

  isPermitted(): boolean {
    if (!this.foodItem.isAvailable()) return false;
    const restaurantSearcher = new RestaurantSearcher();
    const restaurant: Restaurant = restaurantSearcher.searchById(
      this.foodItem.getRestaurantId()
    );
    return this.deliveryManager.isDeliveryPossible(
      restaurant.getAddress(),
      this.user.getAddress()
    );
  }
}
