const Calculator = require('../calculator');

const calc = new Calculator();

describe(`Calculator add function tests`, function() {
  test(`should check positive values`, async () => {
    let result = calc.add(2, 4, 6);
    expect(result).toEqual(12)
  });

  test(`should check float values`, async () => {
    let result = calc.add(0.1, 0.2);
    expect(result).toEqual(0.3);
  });

  test(`should check float values`, async () => {
    let result = calc.add(0.1, 0.2);
    expect(result).toBeCloseTo(0.3);
  });

  test(`should check negative values`, async () => {
    let result = calc.add(-2, 4, -6);
    expect(result).toEqual(-4)
  });

  test(`should check string value`, async () => {
    let result = calc.add(2, '4', 6);
    expect(result).toEqual(12)
  });

  test(`should check infinity value`, async () => {
    let result = calc.add(2, Infinity, 6);
    expect(result).toEqual(Infinity)
  });

  test(`should check NnaN value`, async () => {
    let result = calc.add(2, NaN, 6);
    expect(result).toBeNaN();
  });

  test(`shouldn't be undefined`,  async () => {
    let result = calc.add(2, undefined, 6);
    expect(result).not.toBe(undefined);
  })
});

describe(`Calculator multiply function`, () => {
  test(`should check positive values`, async () => {
    let result = calc.multiply(2, 2, 5);
    expect(result).toBe(20);
  });
});

describe(`Calculator multiply function`, () => {
  test(`should check positive values`, async () => {
    let result = calc.subtraction(10, 1);
    expect(result).toBe(9);
  });
});

describe(`Calculator multiply function`, () => {
    test(`should check positive values`, async () => {
      let result = calc.divide(10, 2);
    expect(result).toBe(5);
  });

  test(`should check zero division`, async () => {
    let result = calc.divide(10, 0);
    expect(result).toEqual(Infinity);
  })
});