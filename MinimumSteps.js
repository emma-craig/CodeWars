// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

const minimumSteps = (arr, number) => {
  arr.sort((a, b) => a - b);

  let sum = 0;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum >= number) return i;
  }
};
