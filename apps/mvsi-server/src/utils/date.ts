export function MVSTime(date: Date) {
  return Math.floor(date.getTime() / 1000);
}

export type ObjectWithDateNumber<T> = {
  [K in keyof T]: T[K] extends Date ? number : T[K];
};
