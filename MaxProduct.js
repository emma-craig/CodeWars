// Given an array/list [] of integers , Find the product of the k maximal numbers.

const maxProduct = (numbers, size) =>
  numbers
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((total, el) => total * el, 1);

    