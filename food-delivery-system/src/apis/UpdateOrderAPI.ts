import { Order, OrderStatus, User } from "./fooddelsys.data"; // Assuming these classes are in a separate module
import { OrderManager, UserManager } from "./fooddelsys.managers"; // Assuming these classes are in separate modules

export class UpdateOrderAPI {
  private userManager: UserManager = new UserManager();
  private orderManager: OrderManager = new OrderManager();

  updateOrder(orderId: number, status: OrderStatus, userToken: string): void {
    // ...
    const user: User = this.userManager.getUserByToken(userToken);
    //
    const order: Order | undefined = this.orderManager.getOrder(orderId);
    //
    if (order && status === OrderStatus.COOKING) {
      this.orderManager.setOrderToCooking(user, order);
    }
  }
}
