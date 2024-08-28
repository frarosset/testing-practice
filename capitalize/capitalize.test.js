import capitalize from "./capitalize.js";

test("capitalize string when first letter is lowercase", () => {
  const dataArray = [
    ["hello world!", "Hello world!"],
    ["i'm a string!", "I'm a string!"],
  ];

  dataArray.forEach((data) => {
    const actual = capitalize(data[0]);
    const expected = data[1];
    expect(actual).toBe(expected);
  });
});

test("capitalize string when first character is not a lowercase letter", () => {
  const dataArray = [
    ["Hello world!", "Hello world!"],
    ["I'm a string!", "I'm a string!"],
    ["!important", "!important"],
    ["44cats", "44cats"],
  ];

  dataArray.forEach((data) => {
    const actual = capitalize(data[0]);
    const expected = data[1];
    expect(actual).toBe(expected);
  });
});

test("capitalize a one-character string", () => {
  const dataArray = [["h", "H"]];

  dataArray.forEach((data) => {
    const actual = capitalize(data[0]);
    const expected = data[1];
    expect(actual).toBe(expected);
  });
});

test("capitalize a zero-character string", () => {
  const dataArray = [["", ""]];

  dataArray.forEach((data) => {
    const actual = capitalize(data[0]);
    const expected = data[1];
    expect(actual).toBe(expected);
  });
});

test("throw error when the input is not a string", () => {
  const dataArray = [122, undefined, null, ["hello", "world"]];

  dataArray.forEach((data) => {
    expect(() => {
      capitalize(data);
    }).toThrow("Not a string");
  });
});
