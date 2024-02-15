function oddOnesOut(nums) {
  let count = 1;
  let hashTable = new Map();
  for (let num of nums) {
    hashTable.set(num, (hashTable.get(num) || 0) + 1);
  }
  let sum = 0;
  let array = [];
  for (let [num, count] of hashTable.entries()) {
    if (count % 2 === 0) array.push(num);
  }
  return nums.filter((el) => array.includes(el));
}

// or


const results = {};
nums.forEach(num => {
  if (results[num]) {
    results[num]++
  } else {
    results[num] = 1
  }
});

return nums.filter(el => results[el] % 2 === 0)
