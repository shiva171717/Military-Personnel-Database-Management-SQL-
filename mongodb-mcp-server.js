import { Server } from "@modelcontextprotocol/sdk/server";
import { z } from "zod";
import { MongoClient } from "mongodb";

const MONGO_URI =
  "mongodb+srv://shivacharan1717:q5te0zExNssZiPQQ@cluster0.lfsqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(MONGO_URI);

async function start() {
  await client.connect();
  const db = client.db("yourDB"); // change name
  const server = new Server({ name: "mongo-mcp", version: "1.0.0" });

  // ---- TOOL: find one document ----
  server.tool("findOne", {
    input: z.object({
      collection: z.string(),
      query: z.any(),
    }),
    output: z.any(),
    async handler({ collection, query }) {
      const col = db.collection(collection);
      return await col.findOne(query);
    },
  });

  // ---- TOOL: find many documents ----
  server.tool("findMany", {
    input: z.object({
      collection: z.string(),
      query: z.any(),
      limit: z.number().optional(),
    }),
    output: z.any(),
    async handler({ collection, query, limit = 10 }) {
      const col = db.collection(collection);
      return await col.find(query).limit(limit).toArray();
    },
  });

  server.listen();
  console.log("MongoDB MCP Server running!");
}

start();
