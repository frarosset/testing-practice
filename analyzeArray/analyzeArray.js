export default function analyzeArray(arr) {
  if (!isArrayOfNumbers(arr)) {
    throw new Error("Not an array of numbers");
  }

  const obj = {};

  const sum = arr.reduce((sum, item) => sum + item, 0);

  obj.min = Math.min(...arr);
  obj.max = Math.max(...arr);
  obj.length = arr.length;
  obj.average = sum / obj.length;

  return obj;
}

function isNumeric(num) {
  return typeof num === "number";
}

function isArray(data) {
  return Array.isArray(data);
}

function isArrayOfNumbers(arr) {
  if (!isArray(arr)) {
    return false;
  }

  // Test that each element is a number
  const arrOfNumbers = arr.filter((item) => isNumeric(item));
  return arrOfNumbers.length === arr.length;
}
