// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

const maxGap = (numbers) => {
  let differences = [];
  numbers.sort((a, b) => a - b);
  for (i = 1; i < numbers.length; i++) {
    differences.push(numbers[i] - numbers[i - 1]);
  }
  return differences.sort((a, b) => b - a).shift();
};

//or

