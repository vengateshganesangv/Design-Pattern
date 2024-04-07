import { RedirectionResponse } from "../Data/RedirectionResponse";
import { Request } from "../Data/Request";
import { RedirectionManager } from "../Manager/RedirectionManager";

export class RedirectionAPI {
  constructor(private strategy: RedirectionManager) {}
  manageRedirection(request: Request): RedirectionResponse {
    return this.strategy.redirect(request);
  }
}
