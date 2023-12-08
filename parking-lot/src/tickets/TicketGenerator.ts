import { ParkingSpot } from "../data/ParkingSpot";
import { Ticket } from "../data/Ticket";
import { Vehicle } from "../data/Vechicle";

export class TicketGenerator {
  public generateTicket(vehicle: Vehicle, parkingSpot: ParkingSpot): Ticket {
    const ticketNum = this.getUniqueTicketNum();
    // logic to check if isFree & then park & persist in DB
    return new Ticket(ticketNum, vehicle, parkingSpot);
  }

  private getUniqueTicketNum(): string {
    // Replace with actual logic to generate unique ticket numbers
    return "";
  }
}
