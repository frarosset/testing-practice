export default function reverseString(string) {
  if (!(typeof string === "string" || string instanceof String)) {
    throw new Error("Not a string");
  }

  const arr = string.split("");
  const arrReversed = arr.reduce((arrRev, item) => {
    arrRev.unshift(item);
    return arrRev;
  }, []);
  return arrReversed.join("");
}
