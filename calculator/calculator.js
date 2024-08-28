export class Calculator {
  constructor() {}

  #isNotNumeric(num) {
    return typeof num !== "number";
  }

  add(num1, num2) {
    if (this.#isNotNumeric(num1) || this.#isNotNumeric(num2)) {
      throw new Error("Not numeric inputs");
    }
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }
}

const calculator = new Calculator();

export default calculator;
