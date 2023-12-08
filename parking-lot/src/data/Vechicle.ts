import { VehicleType } from "../data/VechicleType";

export class Vehicle {
  readonly name: string;
  readonly vehicleType: VehicleType;
  readonly number: string;
  readonly entryTime: Date;

  constructor(
    name: string,
    vehicleType: VehicleType,
    number: string,
    entryTime: Date
  ) {
    this.name = name;
    this.vehicleType = vehicleType;
    this.number = number;
    this.entryTime = entryTime;
  }

  getName(): string {
    return this.name;
  }

  getVehicleType(): VehicleType {
    return this.vehicleType;
  }

  getNumber(): string {
    return this.number;
  }

  getEntryTime(): Date {
    return this.entryTime;
  }
}
