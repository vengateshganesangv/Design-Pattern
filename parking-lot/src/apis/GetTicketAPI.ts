import { ParkingSpot } from "../data/ParkingSpot";
import { Ticket } from "../data/Ticket";
import { Vehicle } from "../data/Vechicle";
import { TicketGenerator } from "../tickets/TicketGenerator";

export class GetTicketAPI {
  getTicket(vehicle: Vehicle, parkingSpot: ParkingSpot): Ticket {
    return new TicketGenerator().generateTicket(vehicle, parkingSpot);
  }
}
