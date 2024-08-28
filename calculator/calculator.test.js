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

test("add floating point numbers", () => {
  const dataArray = [
    [1.9, 2.8, 4.7],
    [0.1, 0.2, 0.3],
  ];
  dataArray.forEach((data) => {
    const actual = calculator.add(data[0], data[1]);
    const expected = data[2];
    expect(actual).toBeCloseTo(expected);
  });
});

test("throw error when add non-numeric inputs", () => {
  const dataArray = [
    [1, null],
    [undefined, 1],
    ["1", "abc"],
    [[1, 1, 1], 1],
  ];

  dataArray.forEach((data) => {
    expect(() => {
      calculator.add(data[0], data[1]);
    }).toThrow("Not numeric inputs");
  });
});

test("subtract integer numbers", () => {
  const dataArray = [
    [1, 2, -1],
    [0, 0, 0],
    [-1, -2, 1],
  ];
  dataArray.forEach((data) => {
    const actual = calculator.subtract(data[0], data[1]);
    const expected = data[2];
    expect(actual).toBe(expected);
  });
});

test("subtract floating point numbers", () => {
  const dataArray = [
    [1.9, 2.8, -0.9],
    [0.1, 0.2, -0.1],
  ];
  dataArray.forEach((data) => {
    const actual = calculator.subtract(data[0], data[1]);
    const expected = data[2];
    expect(actual).toBeCloseTo(expected);
  });
});

test("throw error when subtract non-numeric inputs", () => {
  const dataArray = [
    [1, null],
    [undefined, 1],
    ["1", "abc"],
    [[1, 1, 1], 1],
  ];

  dataArray.forEach((data) => {
    expect(() => {
      calculator.subtract(data[0], data[1]);
    }).toThrow("Not numeric inputs");
  });
});
