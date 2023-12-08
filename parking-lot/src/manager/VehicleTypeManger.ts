import { ParkingSpot } from "../data/ParkingSpot";

export interface VehicleTypeManager {
  getParkingSpots(): ParkingSpot[];

  getParkingFees(durationInHours: number): number;
}
