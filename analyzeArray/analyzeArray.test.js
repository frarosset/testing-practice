import analyzeArray from "./analyzeArray.js";

// dataArray items: [string, shift factor, expected result]
const testDataArrayToBe = (dataArray) => {
  dataArray.forEach((data) => {
    const actual = analyzeArray(data[0]);
    const expected = data[1];
    expect(actual).toStrictEqual(expected);
  });
};

test("test basic array", () => {
  const dataArray = [
    [
      [1, 8, 3, 4, 2, 6],
      {
        average: 4,
        min: 1,
        max: 8,
        length: 6,
      },
    ],
  ];
  testDataArrayToBe(dataArray);
});
