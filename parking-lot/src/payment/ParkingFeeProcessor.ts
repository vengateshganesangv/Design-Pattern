import { Ticket } from "../data/Ticket";
import { VehicleTypeManagerFactory } from "../manager/VechicleTypeManagerFactory";
import { PaymentProcessor } from "./PaymentProcessor";

export class ParkingFeeProcessor {
  getParkingFees(ticket: Ticket): number {
    let duration: number = 0;
    // figure out the duration

    return VehicleTypeManagerFactory.getVehicleTypeManager(
      ticket.vehicle.vehicleType
    ).getParkingFees(duration);
  }

  processParkingFees(
    ticket: Ticket,
    paymentProcessor: PaymentProcessor
  ): boolean {
    if (this.getParkingFees(ticket) !== paymentProcessor.getAmount())
      throw new Error("Payment amount mismatch");
    return paymentProcessor.executePayment();
  }
}
