export default function capitalize(string) {
  const firstLetter = string[0];
  const restOfTheString = string.slice(1);
  return [firstLetter.toUpperCase(), restOfTheString].join("");
}
