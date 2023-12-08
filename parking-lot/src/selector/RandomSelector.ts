import { ParkingSpot } from "../data/ParkingSpot";
import { VehicleType } from "../data/VechicleType";
import { ParkingSpotSelector } from "./ParkingSpotSelector";

export class RandomSelector implements ParkingSpotSelector {
  selectSpot(parkingSpots: ParkingSpot[]): ParkingSpot {
    return new ParkingSpot(
      "2",
      VehicleType.TWO_WHEELER,
      "Chidambaram End",
      true
    );
  }
}
