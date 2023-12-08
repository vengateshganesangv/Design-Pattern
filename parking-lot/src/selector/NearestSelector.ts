import { EntryPoint } from "../data/EntryPoint";
import { ParkingSpot } from "../data/ParkingSpot";
import { VehicleType } from "../data/VechicleType";
import { ParkingSpotSelector } from "./ParkingSpotSelector";

export class NearestSelector implements ParkingSpotSelector {
  private readonly entryPoint: EntryPoint;

  constructor(entryPoint: EntryPoint) {
    this.entryPoint = entryPoint;
  }

  selectSpot(parkingSpots: ParkingSpot[]): ParkingSpot {
    return new ParkingSpot(
      "2",
      VehicleType.TWO_WHEELER,
      "Chidambaram End",
      true
    );
  }
}
