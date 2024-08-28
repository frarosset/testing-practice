export default function analyzeArray(arr) {
  const obj = {};

  const sum = arr.reduce((sum, item) => sum + item, 0);

  obj.min = Math.min(...arr);
  obj.max = Math.max(...arr);
  obj.length = arr.length;
  obj.average = sum / obj.length;

  return obj;
}
