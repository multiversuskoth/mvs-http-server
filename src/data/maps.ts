export const maps1v1 = ["M001_V2", "M003_V1", "M003_V5", "M008_V2", "M009_V2", "M011_V3", "M011_V4", "M006_V3", "M015_V1"];
export const maps2v2 = ["M001", "M003_V3", "M003_V5", "M009_V1", "M011_V1", "M011_V2", "M006_V2"];

export function getRandomMapByType(mode: string) {
  if (mode === "1v1") {
    return getRandomMap1v1();
  }
  if (mode === "2v2") {
    return getRandomMap2v2();
  }
  return getRandomMap1v1();
}

export function getRandomMap1v1(): string {
  const randomIndex = Math.floor(Math.random() * maps1v1.length);
  return maps1v1[randomIndex];
}

export function getRandomMap2v2(): string {
  const randomIndex = Math.floor(Math.random() * maps2v2.length);
  return maps2v2[randomIndex];
}
