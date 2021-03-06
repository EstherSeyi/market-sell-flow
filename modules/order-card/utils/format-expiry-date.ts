import format from "date-fns/format";

export default function formatExpiryDate(dateString = "") {
  if (!dateString || typeof Date.parse(dateString) !== "number") return "N/A";

  const date = new Date(dateString);

  return format(date, "E, MM LLL yyyy");
}
