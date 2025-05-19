export function dotify(obj: any, prefix: string, result: Record<any, any>, firstDepth: boolean) {
  let delimiter = ".";
  if (firstDepth) {
    delimiter = "";
  }
  for (const key in obj) {
    const value = obj[key];
    if (isPrimitive(value)) {
      result[prefix + delimiter + key] = value;
    } else {
      dotify(value, prefix + delimiter + key, result, false);
    }
  }
  return result;
}

function isPrimitive(test: any) {
  return test !== Object(test);
}
