import mongoose, { Schema } from "mongoose";
import env from "../env/env";
import { Player, playerModel } from "./Player";
import UserSegment from "../enums/user_segment";
import { accountModel } from "./Account";
import { configurationModel } from "./Configuration";
import { logger } from "../config/logger";

export async function connect() {
  await mongoose.connect(env.MONGODB_URI);
  logger.info("Successfully connected to MongoDB!");
}
