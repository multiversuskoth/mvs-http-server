export function dotify(
  obj: any,
  prefix: string,
  result: Record<any, any>,
  firstDepth: Boolean
) {
  let delimiter = ".";
  if (firstDepth) {
    delimiter = "";
  }
  for (let key in obj) {
    let value = obj[key];
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
