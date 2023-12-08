// Assuming these imports are correct, based on a similar directory structure.
import { User, CartItem, FoodItem, DataAccessResult } from "../data";
import { PermissionFactory } from "../factory/PermissionFactory";
import { Permission } from "../perm/Permission";
import { DataAccessor } from "../data/DataAccessor"; // This import is based on assumption. Adjust path accordingly.
import { DataAccessObjectConverter } from "../data/DataAccessObjectConverter"; // Adjust path accordingly.

export class CartManager {
  getUserCart(user: User): CartItem[] {
    const dataAccessResult: DataAccessResult = DataAccessor.getCart(user);
    return DataAccessObjectConverter.convertToCartItems(dataAccessResult);
  }

  // Adds 1 unit
  addItemToCart(user: User, foodItem: FoodItem): void {
    const permission: Permission = PermissionFactory.getAddToCartPermission(
      user,
      foodItem
    );
    if (!permission.isPermitted()) throw new Error("Permission Denied");
    if (!this.isFoodItemFromSameRestaurant(user, foodItem))
      throw new Error("Your cart contains items from a different restaurant");
    DataAccessor.addItemToCart(user, foodItem);
  }

  deleteItemFromCart(user: User, foodItem: FoodItem): void {
    const permission: Permission =
      PermissionFactory.getDeleteFromCartPermission(user, foodItem);
    if (!permission.isPermitted()) throw new Error("Permission Denied");
    if (!this.isFoodItemPresentInCart(user, foodItem))
      throw new Error("foodItem not in cart");
    DataAccessor.deleteItemFromCart(user, foodItem);
  }

  checkOutUserCart(user: User): void {
    const permission: Permission =
      PermissionFactory.getCheckoutCartPermission(user);
    if (!permission.isPermitted()) throw new Error("Permission Denied");
    if (this.isCartEmpty(user)) throw new Error("Cart empty");
    DataAccessor.checkOutCart(user);
  }

  private isFoodItemFromSameRestaurant(
    user: User,
    foodItem: FoodItem
  ): boolean {
    const cartItems: CartItem[] = this.getUserCart(user);
    return (
      cartItems.length === 0 ||
      cartItems[0].foodItem.restaurantId === foodItem.restaurantId
    );
  }

  private isFoodItemPresentInCart(user: User, foodItem: FoodItem): boolean {
    const cartItems: CartItem[] = this.getUserCart(user);
    return cartItems.some((item) => item.foodItem.id === foodItem.id);
  }

  private isCartEmpty(user: User): boolean {
    const cartItems: CartItem[] = this.getUserCart(user);
    return cartItems.length === 0;
  }
}
