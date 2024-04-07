import { Filter } from "./Filter";
import { Server } from "../Data/Server";

export class ActiveFilter implements Filter {
  filter(servers: Server[]): Server[] {
    let activeServers = [];
    for (let i = 0; i < servers.length; i++) {
      if (servers[i].isHealthy) {
        activeServers.push(servers[i]);
      }
    }
    return activeServers;
  }
}
