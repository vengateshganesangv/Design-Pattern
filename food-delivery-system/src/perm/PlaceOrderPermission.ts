import { User } from "../data/User"; // Assuming the User class is in a separate module
import { Permission } from "./Permission";

export class PlaceOrderPermission implements Permission {
  private user: User;

  constructor(user: User) {
    this.user = user;
  }

  isPermitted(): boolean {
    return false;
  }
}
