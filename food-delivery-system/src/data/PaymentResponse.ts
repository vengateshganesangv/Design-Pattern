import { PaymentStatus } from "./PaymentStatus"; // Assuming the PaymentStatus is in the same directory. Adjust the path if necessary.

export class PaymentResponse {
  private readonly amount: number;
  private readonly id: number;
  private readonly status: PaymentStatus;

  constructor(amount: number, id: number, status: PaymentStatus) {
    this.amount = amount;
    this.id = id;
    this.status = status;
  }

  getAmount(): number {
    return this.amount;
  }

  getId(): number {
    return this.id;
  }

  getStatus(): PaymentStatus {
    return this.status;
  }
}
