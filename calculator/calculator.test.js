import calculator from "./calculator.js";

// dataArray items: [number1, number2, expected result]
const testDataArrayToBeCloseTo = (dataArray, operation) => {
  dataArray.forEach((data) => {
    const actual = calculator[operation](data[0], data[1]);
    const expected = data[2];
    expect(actual).toBeCloseTo(expected);
  });
};

// dataArray items: [number1, number2]
const testDataArrayToThrow = (dataArray, error, operation) => {
  dataArray.forEach((data) => {
    expect(() => {
      calculator[operation](data[0], data[1]);
    }).toThrow(error);
  });
};

const notNumericError = "Not numeric inputs";
const divideByZeroError = "Division by 0";

test("add integer numbers", () => {
  const dataArray = [
    [1, 2, 3],
    [0, 0, 0],
    [-1, -2, -3],
  ];
  testDataArrayToBeCloseTo(dataArray, "add");
});

test("add floating point numbers", () => {
  const dataArray = [
    [1.9, 2.8, 4.7],
    [0.1, 0.2, 0.3],
  ];
  testDataArrayToBeCloseTo(dataArray, "add");
});

test("throw error when add non-numeric inputs", () => {
  const dataArray = [
    [1, null],
    [undefined, 1],
    ["1", "2"],
    [[1, 1, 1], 1],
  ];
  testDataArrayToThrow(dataArray, notNumericError, "add");
});

test("subtract integer numbers", () => {
  const dataArray = [
    [1, 2, -1],
    [0, 0, 0],
    [-1, -2, 1],
  ];
  testDataArrayToBeCloseTo(dataArray, "subtract");
});

test("subtract floating point numbers", () => {
  const dataArray = [
    [1.9, 2.8, -0.9],
    [0.1, 0.2, -0.1],
  ];
  testDataArrayToBeCloseTo(dataArray, "subtract");
});

test("throw error when subtract non-numeric inputs", () => {
  const dataArray = [
    [1, null],
    [undefined, 1],
    ["1", "2"],
    [[1, 1, 1], 1],
  ];
  testDataArrayToThrow(dataArray, notNumericError, "subtract");
});

test("multiply numbers", () => {
  const dataArray = [
    [10, 5, 50],
    [0.1, 0.2, 0.02],
    [-0.1, 0.2, -0.02],
  ];
  testDataArrayToBeCloseTo(dataArray, "multiply");
});

test("throw error when multiply non-numeric inputs", () => {
  const dataArray = [
    [1, null],
    [undefined, 1],
    ["1", "2"],
    [[1, 1, 1], 1],
  ];
  testDataArrayToThrow(dataArray, notNumericError, "multiply");
});

test("divide numbers", () => {
  const dataArray = [
    [10, 5, 2],
    [0.1, 0.2, 0.5],
    [-0.1, 0.2, -0.5],
  ];
  testDataArrayToBeCloseTo(dataArray, "divide");
});

test("throw error when divide by 0", () => {
  const dataArray = [
    [1, 0],
    [0, 0],
  ];
  testDataArrayToThrow(dataArray, divideByZeroError, "divide");
});

test("throw error when divide non-numeric inputs", () => {
  const dataArray = [
    [1, null],
    [undefined, 1],
    ["1", "2"],
    [[1, 1, 1], 1],
  ];
  testDataArrayToThrow(dataArray, notNumericError, "divide");
});
