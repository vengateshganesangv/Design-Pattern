import { PaymentProcessor } from "./PaymentProcessor";

export class CashPaymentProcessor implements PaymentProcessor {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  executePayment(): boolean {
    return false;
  }

  getAmount(): number {
    return 0; // You might want to change this to return the actual 'amount' instead of 0
  }
}
