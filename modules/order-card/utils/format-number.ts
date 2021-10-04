export default function formatNumber(number: number, decimalPlaces: number) {
  if (!number || typeof number !== "number") return null;

  return number.toFixed(decimalPlaces);
}
