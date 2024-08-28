import reverseString from "./reverseString.js";

<<<<<<< HEAD
test("reverse string", () => {
  const data = "hello world!";
  const actual = reverseString(data);
  const expected = "!dlrow olleh";
  expect(actual).toBe(expected);
=======
test("reverse string", () => {
  const dataArray = [
    ["hello world!", "!dlrow olleh"],
    ["I'm a string", "gnirts a m'I"],
  ];
  dataArray.forEach((data) => {
    const actual = reverseString(data[0]);
    const expected = data[1];
    expect(actual).toBe(expected);
  });
>>>>>>> eadde37 (Add another (failing) test for reverseString() function)
});
