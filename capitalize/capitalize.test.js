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
