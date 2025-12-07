import { Server } from "@modelcontextprotocol/sdk";
import zomatoServer from "zomato-mcp-server";

const server = new Server({
  servers: [zomatoServer({ apiKey: "YOUR_ZOMATO_API_KEY" })],
});

server.start();
