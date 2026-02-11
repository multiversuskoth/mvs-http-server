import { ConfigDataModel } from "@mvsi/database/models/Config";
import { ObjectId } from "@mvsi/database/papr";
import { logger } from "@mvsi/logger";

let CRC = 1;
let VERSION = 100000;

export function getCurrentCRC() {
  return CRC;
}

export function getCurrentVersion() {
  return VERSION;
}
export const MATCHMAKING_CRC = 1;

export async function LoadConfig() {
  const config = await ConfigDataModel.upsert(
    {},
    {
      $setOnInsert: {
        CRC: 1,
        VERSION: 100000,
      },
    },
  );
  CRC = config.CRC;
  VERSION = config.VERSION;

  const changeStream = ConfigDataModel.collection.watch();
  changeStream
    .on("change", async () => {
      const config = await ConfigDataModel.findOne({});
      if (config) {
        CRC = config.CRC;
        VERSION = config.VERSION;
      }
    })
    .once("error", () => {
      // handle error
    });
}

export async function UpdateCrc() {
  const doc = await ConfigDataModel.findOneAndUpdate(
    {}, // match the single entry
    { $inc: { CRC: 1 } }, // increment
    { upsert: true }, // create if missing, return updated doc
  );
  if (!doc) {
    logger.error("CRC incremenent error");
    return;
  }

  // We use stream nows
  //CRC = doc.CRC;
}
