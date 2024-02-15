const squareSum = (numbers) =>
  numbers.reduce((prev, curr) => prev + Math.pow(curr, 2), 0);
