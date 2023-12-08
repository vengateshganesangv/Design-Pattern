import { User, FoodItem } from "../data"; // Adjust paths as necessary.
import { Permission } from "./Permission"; // Assuming the Permission interface is in the same directory.

export class DeleteFromCartPermission implements Permission {
  private readonly user: User;
  private readonly foodItem: FoodItem;

  constructor(user: User, foodItem: FoodItem) {
    this.user = user;
    this.foodItem = foodItem;
  }

  isPermitted(): boolean {
    return false;
  }
}
