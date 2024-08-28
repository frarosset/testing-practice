import capitalize from "./capitalize.js";

test("capitalize string when first letter is lowercase", () => {
  const data = "hello world!";
  const actual = capitalize(data);
  const expected = "Hello world!";
  expect(actual).toBe(expected);
});
