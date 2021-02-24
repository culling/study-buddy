import Server from './Server';
import { ProjectRoute } from "./routes";
import { config } from './config';
const port = config.port;
const server = new Server(
  [
    new ProjectRoute()
  ],
  port,
);

server.listen();