// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

const productArray = (numbers) =>
  numbers.map((el) => numbers.reduce((a, b) => a * b, 1) / el);

  // initially tried to filter each elemet and then reduce each array and push value to new array but actually all you have to do is the reduce and then divide by the one we arent interested in.
//   WOULD WORK FOR ANY ARRAY WHERE WE HAVE 'EXCEPT'