export default function caesarCipher(string, shiftFactor) {
  const stringArr = string.split("");

  const encodedStringArr = stringArr.map((char) =>
    encodeChar(char, shiftFactor)
  );

  return encodedStringArr.join("");
}

function encodeChar(char, shiftFactor) {
  const charCode = char.charCodeAt();
  const shiftedCharCode = charCode + shiftFactor;
  const wrappedShiftedCharCode = wrapChar(shiftedCharCode);
  return String.fromCharCode(wrappedShiftedCharCode);
}

const aCode = "a".charCodeAt();
const zCode = "z".charCodeAt();
const azCodeDiff = zCode - aCode + 1;

function wrapChar(charCode) {
  while (charCode > zCode) {
    charCode -= azCodeDiff;
  }
  return charCode;
}
