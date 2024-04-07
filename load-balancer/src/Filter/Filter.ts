import { Server } from "../Data/Server";

export interface Filter {
  filter(servers: Server[]): Server[];
}
