import caesarCipher from "./caesarCipher.js";

// dataArray items: [string, shift factor, expected result]
const testDataArrayToBe = (dataArray) => {
  dataArray.forEach((data) => {
    const actual = caesarCipher(data[0], data[1]);
    const expected = data[2];
    expect(actual).toBe(expected);
  });
};

test("test basic strings", () => {
  const dataArray = [
    ["fgh", 0, "fgh"],
    ["fgh", 3, "ijk"],
    ["fgh", -3, "cde"],
  ];
  testDataArrayToBe(dataArray);
});

test("test wrapping from z to a and from Z to A (case preservation)", () => {
  const dataArray = [
    ["xyz", 3, "abc"],
    ["XYZ", 3, "ABC"],
    ["XyZ", 3, "AbC"],
    ["abc", -3, "xyz"],
    ["ABC", -3, "XYZ"],
    ["AbC", -3, "XyZ"],
    ["HeLLo", 3, "KhOOr"],
  ];
  testDataArrayToBe(dataArray);
});

test("test punctation and other non-alphabetical chars to remain unchanged (case preservation)", () => {
  const dataArray = [["Hello, World!", 3, "Khoor, Zruog!"]];
  testDataArrayToBe(dataArray);
});
