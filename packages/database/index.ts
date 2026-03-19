import mongoose from "mongoose";
import { env } from "@mvsi/env";
import { logger } from "@mvsi/logger";
import { connect as pConnect } from "./papr"

export async function connect() {
    await pConnect()
    logger.info("Connected to MongoDB!");
}