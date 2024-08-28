import reverseString from "./reverseString.js";

test("reverse string", () => {
  const data = "hello world!";
  const actual = reverseString(data);
  const expected = "!dlrow olleh";
  expect(actual).toBe(expected);
});
