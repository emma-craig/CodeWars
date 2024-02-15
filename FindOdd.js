// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// sort the array and make a nested array to compare each value with the one after it. If they are equal then add one to count. As there is only one add count then as soon as find it you can return this value. Otherwise could push to an array of all the odd ocurring values
const findOdd = (arr) => {
  let count = 0;
  arr.sort((a, b) => a - b);
  for (i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return arr[i];
    }
  }
};


// or use an object with values as count

function findOdd(A) {
    var obj = {};
    A.forEach(el=> {
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }