// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.
// use filter to find and remove all duplicates then sum (use reduce)

// Initialize a hash table.
// For each number in the array, increment its count in the hash table.
// Initialize a variable to hold the sum.
// For each number in the hash table, if its count is 1, add it to the sum.
// Return the sum.

function repeats(arr) {
  let hash = new Map();
  for (let num of arr) {
    hash.set(num, (hash.get(num) || 0) + 1);
  }
  let sum = 0;

  // Iterate through the map and add numbers that occur only once
  for (let [num, count] of hash.entries()) {
    if (count === 1) {
      sum += num;
    }
  }

  return sum;
}

// or

const repeats = (arr) => arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b) => a + b, 0);
