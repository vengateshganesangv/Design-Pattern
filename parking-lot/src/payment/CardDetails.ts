export class CardDetails {
  private nameOnCard: string;
  private pin: number;
  private cardNumber: string;

  constructor(nameOnCard: string, pin: number, cardNumber: string) {
    this.nameOnCard = nameOnCard;
    this.pin = pin;
    this.cardNumber = cardNumber;
  }
}
