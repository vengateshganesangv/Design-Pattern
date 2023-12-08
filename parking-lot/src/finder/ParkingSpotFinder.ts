import { ParkingSpot } from "../data/ParkingSpot";
import { VehicleTypeManager } from "../manager/VehicleTypeManger";
import { ParkingSpotSelector } from "../selector/ParkingSpotSelector";

export class ParkingSpotFinder {
  private readonly vehicleTypeManager: VehicleTypeManager;
  private readonly parkingSpotSelector: ParkingSpotSelector;

  constructor(
    vehicleTypeManager: VehicleTypeManager,
    parkingSpotSelector: ParkingSpotSelector
  ) {
    this.vehicleTypeManager = vehicleTypeManager;
    this.parkingSpotSelector = parkingSpotSelector;
  }

  findParkingSpot(): ParkingSpot {
    const parkingSpots: ParkingSpot[] =
      this.vehicleTypeManager.getParkingSpots();
    return this.parkingSpotSelector.selectSpot(parkingSpots);
  }
}
