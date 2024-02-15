const minSum = (arr) => {
  // Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
  const endIndex = arr.length - 1;
  //sort array.
  const sortedArray = arr.sort((a, b) => a - b);
  // split in half and multiply smallest by biggest

  const smallNumbers = sortedArray.slice(0, endIndex / 2);
  const largeNumbers = sortedArray
    .slice(endIndex / 2, endIndex)
    .sort((a, b) => b - a);
  //add each product to a new array
  let finalArray = [];
  for (i = 0; i <= (endIndex/2) -1; i++) {
    finalArray.push(smallNumbers[i] * largeNumbers[i]);
  }
  return finalArray.reduce((total, el) => {
    return total + el;
  }, 0);

};

// or
function minSum(arr) {
    return arr.sort( (a,b) => a-b )
              .slice(0, arr.length/2)
              .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
  }
