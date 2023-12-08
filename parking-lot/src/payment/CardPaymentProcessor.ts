import { CardDetails } from "./CardDetails";
import { PaymentProcessor } from "./PaymentProcessor";

export class CardPaymentProcessor implements PaymentProcessor {
  private amount: number;
  private cardDetails: CardDetails;

  constructor(amount: number, cardDetails: CardDetails) {
    this.amount = amount;
    this.cardDetails = cardDetails;
  }

  executePayment(): boolean {
    return false;
  }

  getAmount(): number {
    return 0; // You might want to change this to return the actual 'amount' instead of 0
  }
}
