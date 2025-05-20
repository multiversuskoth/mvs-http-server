export function dateToMVSTime(date: Date | null): number | null {
  if (date == null) {
    return null;
  }
  return Math.floor(date.getTime() / 1000);
}

export type ObjectWithDateNumber<T> = {
  [K in keyof T]: T[K] extends Date ? number : T[K];
};

export type ObjectWithUnix<T> = {
  [K in keyof T]: T[K] extends Date ? number : ObjectWithUnix<T[K]>;
};
