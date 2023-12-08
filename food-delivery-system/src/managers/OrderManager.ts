import { User, CartItem, Order, OrderStatus } from "../data"; // Adjust paths based on your structure.
import { PermissionFactory } from "../factory/PermissionFactory";
import { Permission } from "../perm/Permission";
import { CartManager } from "./CartManager";
import { DataAccessor } from "./DataAccessor"; // Assuming you have a corresponding DataAccessor class in TypeScript.

export class OrderManager {
  placeOrder(user: User): Order {
    const permission: Permission =
      PermissionFactory.getPlaceOrderPermission(user);
    if (!permission.isPermitted()) {
      throw new Error("Permission Denied");
    }

    const cartManager = new CartManager();
    const cartItems: CartItem[] = cartManager.getUserCart(user);
    const orderId: number = DataAccessor.createOrder(user, cartItems);
    cartManager.checkOutUserCart(user);
    return new Order(
      cartItems,
      orderId,
      user.getId(),
      OrderStatus.ORDER_PLACED
    );
  }

  getOrders(user: User): Order[] {
    return []; // Placeholder. Implement as needed.
  }

  getOrder(orderId: number): Order | null {
    return null; // Placeholder. Implement as needed.
  }

  setOrderToCooking(user: User, order: Order): void {
    const permission: Permission = PermissionFactory.getUpdateOrderPermission(
      user,
      order,
      OrderStatus.COOKING
    );
    if (!permission.isPermitted()) {
      throw new Error("Permission Denied");
    }
    if (order.getOrderStatus() !== OrderStatus.ORDER_PLACED) {
      throw new Error("Only ORDER_PLACED status can move to COOKING");
    }
    // Additional logic...
  }

  setOrderToReadyForDelivery(user: User, order: Order): void {
    if (order.getOrderStatus() !== OrderStatus.COOKING) {
      throw new Error("Invalid Order Status");
    }
    // Additional logic...
  }

  setOrderToOutForDelivery(user: User, order: Order): void {
    if (order.getOrderStatus() !== OrderStatus.READY_FOR_DELIVERY) {
      throw new Error("Invalid Order Status");
    }
    // Additional logic...
  }

  setOrderToOutForDelivered(user: User, order: Order): void {
    if (order.getOrderStatus() !== OrderStatus.OUT_FOR_DELIVERY) {
      throw new Error("Invalid Order Status");
    }
    // Additional logic...
  }

  setOrderToCanceled(user: User, order: Order): void {
    if (order.getOrderStatus() !== OrderStatus.ORDER_PLACED) {
      throw new Error("Invalid Order Status");
    }
    // Additional logic...
  }
}
