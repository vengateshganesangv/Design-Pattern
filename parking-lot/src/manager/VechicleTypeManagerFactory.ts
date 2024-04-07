import { VehicleType } from "../data/VechicleType";
import { VehicleTypeManager } from "../manager/VehicleTypeManger";
import { TwoWheelerManager } from "../manager/TwoWheelerManager";
import { FourWheelerManager } from "./FourWheelerManager";
import { HeavyVehicleManager } from "./HeavyWheelerManager";

export class VehicleTypeManagerFactory {
  private constructor() {} // Ensures this class isn't instantiated

  public static getVehicleTypeManager(
    vehicleType: VehicleType
  ): VehicleTypeManager {
    let vehicleTypeManager: VehicleTypeManager;

    if (vehicleType === VehicleType.TWO_WHEELER) {
      //composition
      vehicleTypeManager = new TwoWheelerManager();
    } else if (vehicleType === VehicleType.FOUR_WHEELER) {
      vehicleTypeManager = new FourWheelerManager();
    } else if (vehicleType === VehicleType.HEAVY) {
      vehicleTypeManager = new HeavyVehicleManager();
    } else {
      throw new Error("Invalid vehicle type");
    }
    return vehicleTypeManager;
  }
}
