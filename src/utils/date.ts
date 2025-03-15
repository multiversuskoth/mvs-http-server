export function MVSTime(date: Date) {
  return Math.floor(date.getTime() / 1000);
}

export type ObjectWithDateStrings<T> = {
  [K in keyof T]: T[K] extends Date ? string : T[K];
};
