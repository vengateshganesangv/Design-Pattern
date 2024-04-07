import { EntryPoint } from "../data/EntryPoint";
import { SpotSelection } from "../data/SpotSelection";
import { VehicleType } from "../data/VechicleType";
import { ParkingSpot } from "../data/ParkingSpot";
import { VehicleTypeManager } from "../manager/VehicleTypeManger";
import { VehicleTypeManagerFactory } from "../manager/VechicleTypeManagerFactory";
import { ParkingSpotFinder } from "../finder/ParkingSpotFinder";
import { ParkingSpotSelector } from "../selector/ParkingSpotSelector";
import { SpotSelectorFactory } from "../selector/SpotSelectorFactory";

//Class Responsible For Finding Parking Spot
export class FindParkingSpotAPI {
  public findParkingSpot(
    entryPoint: EntryPoint,
    vehicleType: VehicleType,
    spotSelection: SpotSelection
  ): ParkingSpot {
    // VehicleTypeManager Responsible For Getting list of parking spot + cost for the vechicle
    let vehicleTypeManager: VehicleTypeManager =
      VehicleTypeManagerFactory.getVehicleTypeManager(vehicleType);
    // Responsible for to select parking spot
    let parkingSpotSelector: ParkingSpotSelector;

    if (spotSelection === SpotSelection.RANDOM) {
      parkingSpotSelector = SpotSelectorFactory.getRandomSelector();
    } else if (spotSelection === SpotSelection.NEAREST) {
      parkingSpotSelector =
        SpotSelectorFactory.getNearestParkingSpotSelector(entryPoint);
    } else {
      throw new Error("Invalid spot selection");
    }

    return new ParkingSpotFinder(
      vehicleTypeManager,
      parkingSpotSelector
    ).findParkingSpot();
  }
}
