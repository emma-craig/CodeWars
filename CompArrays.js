function comp(array1, array2) {
  //loop through array 1 and map it to squares.
  //sort array 1 and array 2 and check if they are equal

  let squaredArray,
    sortedArray = [];
  if (array1) squaredArray = array1.map((el) => el * el).sort();
  if (array2) sortedArray = array2.sort();

  return JSON.stringify(squaredArray) === JSON.stringify(array2);
}

// or

if(array1 == null || array2 == null) return false;
array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
return array1.map(v => v * v).every((v, i) => v == array2[i]);
