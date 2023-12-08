import { Ticket } from "../data/Ticket";
import { ParkingFeeProcessor } from "../payment/ParkingFeeProcessor";

export class GetParkingFeeAPI {
  getParkingFee(ticket: Ticket): number {
    return new ParkingFeeProcessor().getParkingFees(ticket);
  }
}
