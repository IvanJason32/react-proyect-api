export const parseFloatNumber = (number, affterPoint) => {
  const result = parseFloat(number).toFixed(affterPoint);
  return result === "NaN" ? "-" : result
} 