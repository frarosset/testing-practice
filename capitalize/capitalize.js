export default function capitalize(string) {
  if (string.length == 0) {
    return string;
  }
  const firstLetter = string[0];
  const restOfTheString = string.slice(1);
  return [firstLetter.toUpperCase(), restOfTheString].join("");
}
