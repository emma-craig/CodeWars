const maxRot = (num) => {
  let array = String(num).split("");
  let newArray = [num];
  //take i=0 and move it to the end
  array.push(array.shift()[0]);
  newArray.push(Number(array.join("")));

  for (i = 1; i < array.length - 2; i++) {
    // take i+1 and move it to the end
    array.push(array.splice(i, 1)[0]);

    newArray.push(Number(array.join("")));
  }
  // return last value from array
  newArray.sort((a, b) => a - b);
  return newArray.pop();
};

// or

var str = n.toString();
var arr = [str];
for (var i=0;i<=str.length-1 ;i++){
    str = str.slice(0,i)+str.slice(i+1)+str[i];
    arr.push(str.split().join());
}
return Math.max.apply(null, arr);