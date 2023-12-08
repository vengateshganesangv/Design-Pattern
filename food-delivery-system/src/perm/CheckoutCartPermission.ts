import { User } from "../data/User"; // Adjust the path if necessary.
import { Permission } from "./Permission"; // Assuming the Permission interface is in the same directory.

export class CheckoutCartPermission implements Permission {
  private readonly user: User;

  constructor(user: User) {
    this.user = user;
  }

  isPermitted(): boolean {
    return false;
  }
}
