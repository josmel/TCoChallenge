const {
  getMinChange,
  SortedSquared
} = require('./challenge.js');

describe("function challenge", () => {

  test("getMinChange: first case", () => {
    const resultName = getMinChange([5, 7, 1, 1, 2, 3, 22]);
    expect(20).toEqual(resultName)
  });

  test("getMinChange: second case", () => {
    const resultName = getMinChange([1, 1, 1, 1, 1]);
    expect(6).toEqual(resultName)
  });


});

describe("function SortedSquared", () => {

  test("SortedSquared  : first case", () => {
    const resultName = SortedSquared([1, 2, 3, 5, 6, 8, 9]);
    expect( [1, 4, 9, 25, 36, 64, 81]).toEqual(resultName)
  });

  test("SortedSquared  : second case", () => {
    const resultName = SortedSquared([-2, -1]);
    expect([1, 4]).toEqual(resultName)
  });
});