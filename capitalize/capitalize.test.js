import capitalize from "./capitalize.js";

test("capitalize string when first letter is lowercase (test 1)", () => {
  const data = "hello world!";
  const actual = capitalize(data);
  const expected = "Hello world!";
  expect(actual).toBe(expected);
});

test("capitalize string when first letter is lowercase (test 2)", () => {
  const data = "i'm a string!";
  const actual = capitalize(data);
  const expected = "I'm a string!";
  expect(actual).toBe(expected);
});
