const binarise = (num) => num.toString(2);

const anyOdd = (num) => {
  let binary = binarise(num);
  let result = null;
  let arr = [...binary];
  if (
    arr
      .reverse()
      .filter((el, i) => i % 2 == 1)
      .includes("1")
  )
    result = 1;
  else result = 0;
  return result;
};
//or

function anyOdd(x) {
  var s = x.toString(2).split("").reverse();
  for (var i = 0; i < s.length; ++i) if (i % 2 == 1 && s[i] == 1) return 1;
  return 0;
}
