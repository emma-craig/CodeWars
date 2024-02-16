// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.

const deleteNth = (arr, x) => {
  // make an ocurrance map
  let map = {};
  //filter array
  return arr.filter((n) => {
    map[n] = (map[n] || 0) + 1;
    return map[n] <= x;
  });
};


