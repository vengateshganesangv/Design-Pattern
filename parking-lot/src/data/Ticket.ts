import { Vehicle } from "./Vechicle";
import { ParkingSpot } from "../data/ParkingSpot";

export class Ticket {
  readonly refNum: string;
  readonly vehicle: Vehicle;
  readonly parkingSpot: ParkingSpot;

  constructor(refNum: string, vehicle: Vehicle, parkingSpot: ParkingSpot) {
    this.refNum = refNum;
    this.vehicle = vehicle;
    this.parkingSpot = parkingSpot;
  }

  getRefNum(): string {
    return this.refNum;
  }

  getVehicle(): Vehicle {
    return this.vehicle;
  }

  getParkingSpot(): ParkingSpot {
    return this.parkingSpot;
  }
}
