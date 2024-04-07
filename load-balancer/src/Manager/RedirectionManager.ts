import { RedirectionResponse } from "../Data/RedirectionResponse";
import { Request } from "../Data/Request";

export interface RedirectionManager {
  redirect(request: Request): RedirectionResponse;
}
