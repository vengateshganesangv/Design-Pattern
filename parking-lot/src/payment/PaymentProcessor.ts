export interface PaymentProcessor {
  executePayment(): boolean;
  getAmount(): number;
}
