const twoSum = require("../src/javascript/two-sum");

test("Example test cases", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});

test("Edge cases", () => {
  expect(twoSum([], 5)).toEqual([]);
  expect(twoSum([1, 5, 3], 10)).toEqual([]);
});
