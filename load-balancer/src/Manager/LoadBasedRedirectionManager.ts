import { RedirectionManager } from "./RedirectionManager";
import { ServerManager } from "./ServerManager";
import { RedirectionResponse } from "../Data/RedirectionResponse";
import { Request } from "../Data/Request";
import { ActiveFilter } from "../Filter/ActiveFilter";

export class LoadBasedStrategy implements RedirectionManager {
  private serverManager: ServerManager = new ServerManager();

  redirect(request: Request): RedirectionResponse {
    let activeServers = this.serverManager.getFilteredServers(
      new ActiveFilter()
    );
    if (activeServers.length === 0) {
      throw new Error("No active servers available");
    }

    // Find the server with the minimum load
    let selectedServer = activeServers.reduce(
      (minServer, server) =>
        server.load < minServer.load ? server : minServer,
      activeServers[0]
    );

    // Simulating request handling by increasing the load
    selectedServer.load++;

    return { serverId: selectedServer.id, status: "redirected" };
  }
}
