import { ConfigDataModel } from "../database/Config";

let CRC = 1267552956;

export function getCurrentCRC() {
  return CRC;
}
export const MATCHMAKING_CRC = 1;

export async function LoadConfig() {
  const existing = await ConfigDataModel.findOne().exec();
  if (!existing) {
    await ConfigDataModel.create({ CRC: 1 });
  }

  if (existing) {
    CRC = existing.CRC;
  }
}

export async function UpdateCrc() {
  const doc = await ConfigDataModel.findOneAndUpdate(
    {}, // match the single entry
    { $inc: { CRC: 1 } }, // increment
    { upsert: true, new: true }, // create if missing, return updated doc
  )
    .lean()
    .exec();
  CRC = doc.CRC;
}
