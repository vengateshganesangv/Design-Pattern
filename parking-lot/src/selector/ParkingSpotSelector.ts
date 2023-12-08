import { ParkingSpot } from "../data/ParkingSpot";

export interface ParkingSpotSelector {
  selectSpot(parkingSpots: ParkingSpot[]): ParkingSpot;
}
