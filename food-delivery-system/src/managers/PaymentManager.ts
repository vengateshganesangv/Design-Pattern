import { PaymentResponse } from "../data/PaymentResponse"; // Adjust the path if necessary.

export interface PaymentManager {
  executePayment(): PaymentResponse;
}
