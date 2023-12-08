import { Ticket } from "../data/Ticket";
import { CardDetails } from "../payment/CardDetails";
import { ParkingFeeProcessor } from "../payment/ParkingFeeProcessor";
import { PaymentMode } from "../payment/PaymentMode";
import { PaymentProcessor } from "../payment/PaymentProcessor";
import { PaymentProcessorFactory } from "../payment/PaymentProcessorFactory";

export class PayParkingFeesAPI {
  payParkingFee(
    ticket: Ticket,
    paymentMode: PaymentMode,
    paymentDetails: Map<string, string>
  ): boolean {
    let paymentProcessor: PaymentProcessor | null = null;

    if (paymentMode === PaymentMode.CARD) {
      const amount: number = parseFloat(paymentDetails.get("AMOUNT")!); // Using '!' assuming that AMOUNT key will always be present. Handle null case if necessary.
      let cardDetails: CardDetails | null = null;
      // logic to create the above object
      paymentProcessor = PaymentProcessorFactory.getCardBasedPaymentProcessor(
        amount,
        cardDetails!
      ); // Using '!' assuming cardDetails will be initialized. Handle null case if necessary.
    } else if (paymentMode === PaymentMode.CASH) {
      const amount: number = parseFloat(paymentDetails.get("AMOUNT")!);
      paymentProcessor =
        PaymentProcessorFactory.getCashBasedPaymentProcessor(amount);
    } else {
      throw new Error("Invalid Payment Mode");
    }

    return new ParkingFeeProcessor().processParkingFees(
      ticket,
      paymentProcessor
    );
  }
}
