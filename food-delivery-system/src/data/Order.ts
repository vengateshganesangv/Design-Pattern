import { CartItem } from "./CartItem"; // Adjust the path if necessary.
import { OrderStatus } from "./OrderStatus"; // Adjust the path if necessary.

export class Order {
  private readonly cartItems: CartItem[];
  private readonly orderId: number;
  private readonly userId: number;
  private readonly orderStatus: OrderStatus;

  constructor(
    cartItems: CartItem[],
    orderId: number,
    userId: number,
    orderStatus: OrderStatus
  ) {
    this.cartItems = cartItems;
    this.orderId = orderId;
    this.userId = userId;
    this.orderStatus = orderStatus;
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  getOrderId(): number {
    return this.orderId;
  }

  getUserId(): number {
    return this.userId;
  }

  getOrderStatus(): OrderStatus {
    return this.orderStatus;
  }
}
