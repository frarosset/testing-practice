export class Calculator {
  constructor() {}

  static notNumericError = "Not numeric inputs";

  #isNotNumeric(num) {
    return typeof num !== "number";
  }

  #checkInputs(...inputs) {
    const invaidInputs = inputs.reduce(
      (invaidInputs, input) => invaidInputs || this.#isNotNumeric(input),
      false
    );
    if (invaidInputs) {
      throw new Error(Calculator.notNumericError);
    }
  }

  add(num1, num2) {
    this.#checkInputs(num1, num2);
    return num1 + num2;
  }

  subtract(num1, num2) {
    this.#checkInputs(num1, num2);
    return num1 - num2;
  }

  divide(num1, num2) {
    this.#checkInputs(num1, num2);
    return num1 / num2;
  }
}

const calculator = new Calculator();

export default calculator;
