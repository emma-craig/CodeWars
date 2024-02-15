// Given a string of integers, count how many times that integer repeats itself, then return a string showing the count and the integer.

const countMe = (data) => {
  let result="";
  let count = 1;
  let num = data[0]

  for (let i=1; i <  data.length; i++) {
    if(num=== data[i]){
        count ++
    } else {
        if(!NaN(num)) {
            res += `${count}${num}`;
        } else {
            return ''
        }
        count=1;
        num=data[i]
    }
}
if (!NaN(num)) {
    result += `${count}${num}`;
} else {
    return ''
}
return result;
};
