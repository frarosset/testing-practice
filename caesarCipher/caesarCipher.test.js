import caesarChiper from "./caesarCipher.js";

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
  testDataArrayToBe(dataArray, "add");
});
