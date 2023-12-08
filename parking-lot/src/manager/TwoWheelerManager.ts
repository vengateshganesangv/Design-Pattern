import { ParkingSpot } from "../data/ParkingSpot";
import { VehicleTypeManager } from "../manager/VehicleTypeManger";

export class TwoWheelerManager implements VehicleTypeManager {
  getParkingSpots(): ParkingSpot[] {
    //Actual implementation here; for now, returning an empty array
    return [];
  }

  getParkingFees(durationInHours: number): number {
    //Actual implementation here; for now, returning 0
    return 0;
  }
}
