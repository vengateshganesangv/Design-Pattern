import { User, Order, PaymentResponse, PaymentStatus } from "../data"; // Adjust paths based on your structure
import { PaymentManagerFactory } from "../factory/PaymentManagerFactory";
import { OrderManager } from "../managers/OrderManager";
import { UserManager } from "../managers/UserManager";
import { PaymentManager } from "../managers/PaymentManager";

export class PlaceOrderAPI {
  private userManager: UserManager = new UserManager();
  private orderManager: OrderManager = new OrderManager();

  placeOrder(
    userToken: string,
    paymentInfo: Map<string, string>,
    paymentMode: string
  ): Order {
    if (!userToken) {
      throw new Error("Params missing");
    }

    const user: User | null = this.userManager.getUserByToken(userToken);
    if (!user) {
      throw new Error("userToken Invalid");
    }

    const paymentManager: PaymentManager =
      PaymentManagerFactory.getPaymentManager(paymentMode, paymentInfo);
    const paymentResponse: PaymentResponse | null =
      paymentManager.executePayment();
    if (
      !paymentResponse ||
      !paymentResponse.status ||
      paymentResponse.status === PaymentStatus.FAILED
    ) {
      throw new Error("payment failed...");
    }

    return this.orderManager.placeOrder(user);
  }
}
