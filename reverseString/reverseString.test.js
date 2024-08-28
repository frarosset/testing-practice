import reverseString from "./reverseString.js";

test("reverse string", () => {
  const dataArray = [
    ["hello world!", "!dlrow olleh"],
    ["I'm a string", "gnirts a m'I"],
    ["hellolleh", "hellolleh"],
    ["", ""],
  ];
  dataArray.forEach((data) => {
    const actual = reverseString(data[0]);
    const expected = data[1];
    expect(actual).toBe(expected);
  });
});

test("throw error when the input is not a string", () => {
  const dataArray = [122, undefined, null, ["hello", "world"]];

  dataArray.forEach((data) => {
    expect(() => {
      reverseString(data);
    }).toThrow("Not a string");
  });
});
