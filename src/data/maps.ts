export const maps1v1 = ["M011_V2", "M021"];

// function to randomly select a map from the list
export function getRandomMap1v1(): string {
  const randomIndex = Math.floor(Math.random() * maps1v1.length);
  return maps1v1[randomIndex];
}