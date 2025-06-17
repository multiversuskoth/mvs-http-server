export const maps1v1 = ["M001_V2", "M003_V1", "M003_V5", "M008_V2", "M009_V2", "M011_V3", "M011_V4", "M006_V3", "M015_V1"];

// function to randomly select a map from the list
export function getRandomMap1v1(): string {
  const randomIndex = Math.floor(Math.random() * maps1v1.length);
  return maps1v1[randomIndex];
}
