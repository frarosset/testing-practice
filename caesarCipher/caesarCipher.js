const ACode = "A".charCodeAt();
const ZCode = "Z".charCodeAt();
const aCode = "a".charCodeAt();
const zCode = "z".charCodeAt();
const azCodeDiff = zCode - aCode + 1;
const lowercaseInterval = [aCode, zCode, azCodeDiff];
const uppercaseInterval = [ACode, ZCode, azCodeDiff];

export default function caesarCipher(string, shiftFactor) {
  const stringArr = string.split("");

  const encodedStringArr = stringArr.map((char) =>
    encodeChar(char, shiftFactor)
  );

  return encodedStringArr.join("");
}

function encodeChar(char, shiftFactor) {
  const charCode = char.charCodeAt();

  const charInterval = isLowerCase(char)
    ? lowercaseInterval
    : uppercaseInterval;

  const shiftedCharCode = charCode + shiftFactor;
  const wrappedShiftedCharCode = wrapChar(shiftedCharCode, charInterval);

  return String.fromCharCode(wrappedShiftedCharCode);
}

function wrapChar(charCode, [minCode, maxCode, diff]) {
  while (charCode < minCode) {
    charCode += diff;
  }
  while (charCode > maxCode) {
    charCode -= diff;
  }
  return charCode;
}

function isLowerCase(str) {
  return str === str.toLowerCase() && str !== str.toUpperCase();
}
