import { PaymentProcessor } from "./PaymentProcessor";
import { CardDetails } from "./CardDetails";
import { CardPaymentProcessor } from "./CardPaymentProcessor";
import { CashPaymentProcessor } from "./CashPaymentProcessor";

export class PaymentProcessorFactory {
  private constructor() {}

  public static getCardBasedPaymentProcessor(
    amount: number,
    cardDetails: CardDetails
  ): PaymentProcessor {
    return new CardPaymentProcessor(amount, cardDetails);
  }

  public static getCashBasedPaymentProcessor(amount: number): PaymentProcessor {
    return new CashPaymentProcessor(amount);
  }
}
