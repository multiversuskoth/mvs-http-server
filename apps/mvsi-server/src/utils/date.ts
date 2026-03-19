export function MVSTime(date: Date): number {
  return Math.floor(date.getTime() / 1000);
}

export type ObjectWithDateNumber<T> = {
  [K in keyof T]: T[K] extends Date ? number : T[K];
};

export type ObjectWithUnix<T> = {
  [K in keyof T]: T[K] extends Date ? number : ObjectWithUnix<T[K]>;
};
