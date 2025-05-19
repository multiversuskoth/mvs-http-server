import { Primitive } from "type-fest";
import Characters from "../enums/characters";
import mongoose from "mongoose";

export type MapToRecord<T> = T extends Primitive | mongoose.Types.ObjectId
  ? T
  : T extends Map<Characters, infer B>
    ? Record<Characters, B>
    : {
        [K in keyof T]: T[K] extends Primitive ? T[K] : T[K] extends Map<Characters, infer B> ? Record<Characters, B> : MapToRecord<T[K]>;
      };
