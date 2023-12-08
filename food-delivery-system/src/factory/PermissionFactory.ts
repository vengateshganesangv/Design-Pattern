import { User, FoodItem, Order, OrderStatus } from "../data"; // Adjust paths as necessary.
import { Permission } from "../perm/Permission";
import { AddToCartPermission } from "../perm/AddToCartPermission";
import { DeleteFromCartPermission } from "../perm/DeleteFromCartPermission";
import { CheckoutCartPermission } from "../perm/CheckoutCartPermission";
import { PlaceOrderPermission } from "../perm/PlaceOrderPermission";
import { UpdateOrderPermission } from "../perm/UpdateOrderPermission";

export class PermissionFactory {
  private constructor() {}

  public static getAddToCartPermission(
    user: User,
    foodItem: FoodItem
  ): Permission {
    return new AddToCartPermission(user, foodItem);
  }

  public static getDeleteFromCartPermission(
    user: User,
    foodItem: FoodItem
  ): Permission {
    return new DeleteFromCartPermission(user, foodItem);
  }

  public static getCheckoutCartPermission(user: User): Permission {
    return new CheckoutCartPermission(user);
  }

  public static getPlaceOrderPermission(user: User): Permission {
    return new PlaceOrderPermission(user);
  }

  public static getUpdateOrderPermission(
    user: User,
    order: Order,
    orderStatus: OrderStatus
  ): Permission {
    return new UpdateOrderPermission(user, order, orderStatus);
  }
}
