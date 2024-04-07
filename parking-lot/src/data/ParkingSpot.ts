import { VehicleType } from "../data/VechicleType";

//Think In terms of HIGH Level Most Necessary Thing
export class ParkingSpot {
  readonly floorNum: string;
  readonly vehicleType: VehicleType;
  readonly name: string;
  readonly isFree: boolean;

  constructor(
    floorNum: string,
    vehicleType: VehicleType,
    name: string,
    isFree: boolean
  ) {
    this.floorNum = floorNum;
    this.vehicleType = vehicleType;
    this.name = name;
    this.isFree = isFree;
  }

  getFloorNum(): string {
    return this.floorNum;
  }

  getVehicleType(): VehicleType {
    return this.vehicleType;
  }

  getName(): string {
    return this.name;
  }

  getIsFree(): boolean {
    return this.isFree;
  }
}
