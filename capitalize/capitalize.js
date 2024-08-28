export default function capitalize(string) {
  if (!(typeof string === "string" || string instanceof String)) {
    throw new Error("Not a string");
  }

  if (string.length == 0) {
    return string;
  }
  const firstLetter = string[0];
  const restOfTheString = string.slice(1);
  return [firstLetter.toUpperCase(), restOfTheString].join("");
}
