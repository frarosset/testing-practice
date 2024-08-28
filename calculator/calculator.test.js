import calculator from "./calculator.js";

test("add integer numbers", () => {
  const dataArray = [
    [1, 2, 3],
    [0, 0, 0],
    [-1, -2, -3],
  ];
  dataArray.forEach((data) => {
    const actual = calculator.add(data[0], data[1]);
    const expected = data[2];
    expect(actual).toBe(expected);
  });
});
