const splitAndAdd = (arr, n) => {
  let leftArray = [...arr];
  let rightArray = [...arr];
  let result = [...arr];
  for (i = 1; i <= n; i++) {
    let length = leftArray.length / 2;
    leftArray = result.slice(0, length);

    rightArray = result.slice(length);
    if (leftArray.length < rightArray.length) leftArray.unshift(0);
    result = leftArray.map((el, i) => el + rightArray[i]);
  }
  return result;
};

// or

function splitAndAdd(arr, n) {
    if (n <= 0)
      return arr;
  
    const ln = arr.length;
    if ((ln % 2) === 1)
      arr.unshift(0);
  
    return splitAndAdd(arr.splice(0, Math.ceil(ln / 2)).map((a, i) => a + arr[i]), n-1);
  }
