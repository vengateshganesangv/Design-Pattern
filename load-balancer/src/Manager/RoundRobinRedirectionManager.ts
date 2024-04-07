import { RedirectionManager } from "./RedirectionManager";
import { ServerManager } from "./ServerManager";
import { ActiveFilter } from "../Filter/ActiveFilter";
import { RedirectionResponse } from "../Data/RedirectionResponse";
import { Request } from "../Data/Request";

export class RoundRobinStrategy implements RedirectionManager {
  private serverManager: ServerManager = new ServerManager();
  private currentIndex: number = 0;

  redirect(request: Request): RedirectionResponse {
    let activeServers = this.serverManager.getFilteredServers(
      new ActiveFilter()
    );
    if (activeServers.length === 0) {
      throw new Error("No active servers available");
    }
    let server = activeServers[this.currentIndex % activeServers.length];
    this.currentIndex++;
    return { serverId: server.id, status: "redirected" };
  }
}
