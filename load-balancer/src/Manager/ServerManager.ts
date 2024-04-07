import { Server } from "../Data/Server";
import { Filter } from "../Filter/Filter";

export class ServerManager {
  private servers: Server[] = [
    new Server(1, true),
    new Server(2, false),
    new Server(3, true),
  ];

  public getServers(): Server[] {
    return this.servers;
  }

  public getFilteredServers(filter: Filter): Server[] {
    let servers: Server[] = this.getServers();
    return filter.filter(servers);
  }
}
