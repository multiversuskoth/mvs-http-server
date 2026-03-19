import { EventEmitter } from "node:events";
import { env } from "@mvsi/env";
import { MongoClient, ObjectId as MongoObjectId } from "mongodb";
import Papr from "papr";

export let client: MongoClient;
export const ObjectId = MongoObjectId;

const papr = new Papr();
const dbEmitter = new EventEmitter();
export async function connect() {
  client = await MongoClient.connect(env.MONGODB_URI);

  papr.initialize(client.db());

  await papr.updateSchemas();
  dbEmitter.emit("connected");
}

export async function disconnect() {
  await client.close();
}
export { dbEmitter };
export default papr;
