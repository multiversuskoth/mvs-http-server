import mongoose from "mongoose";
import { Primitive } from "type-fest";

export type IdToString<T> = {
  [K in keyof T]: T[K] extends Primitive | Date ? T[K] : T[K] extends mongoose.Types.ObjectId ? string : IdToString<T[K]>;
};
