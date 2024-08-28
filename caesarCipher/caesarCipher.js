export default function caesarCipher(string, shiftFactor) {
  const stringArr = string.split("");

  const encodedStringArr = stringArr.map((char) =>
    encodeChar(char, shiftFactor)
  );

  return encodedStringArr.join("");
}

function encodeChar(char, shiftFactor) {
  const charCode = char.charCodeAt(char);
  return String.fromCharCode(charCode + shiftFactor);
}
