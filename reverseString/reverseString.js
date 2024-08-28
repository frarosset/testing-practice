export default function reverseString(string) {
  const arr = string.split("");
  const arrReversed = arr.reduce((arrRev, item) => {
    arrRev.unshift(item);
    return arrRev;
  }, []);
  return arrReversed.join("");
}
