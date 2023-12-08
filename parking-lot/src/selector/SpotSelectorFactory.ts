import { EntryPoint } from "../data/EntryPoint";
import { ParkingSpotSelector } from "../selector/ParkingSpotSelector";
import { NearestSelector } from "./NearestSelector";
import { RandomSelector } from "./RandomSelector";

export class SpotSelectorFactory {
  private constructor() {} // Private constructor ensures the class cannot be instantiated

  //NearestSelector SelectSpot Need to know about entry point so we can use this kind of pattern
  public static getNearestParkingSpotSelector(
    entryPoint: EntryPoint
  ): ParkingSpotSelector {
    return new NearestSelector(entryPoint);
  }

  public static getRandomSelector(): ParkingSpotSelector {
    return new RandomSelector();
  }
}
