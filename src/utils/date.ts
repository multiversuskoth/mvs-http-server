import mongoose from "mongoose";
import { Primitive } from "type-fest";

export function dateToMVSTime(date: Date | null): number | null {
  if (date == null) {
    return null;
  }
  return Math.floor(date.getTime() / 1000);
}

export type ObjectWithDateStrings<T> = {
  [K in keyof T]: T[K] extends Date ? string : T[K];
};

export type ObjectWithUnix<T> = {
  [K in keyof T]: T[K] extends Date ? number : ObjectWithUnix<T[K]>;
};
