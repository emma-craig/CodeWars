const amountOfPages = (summary) => {
    let counter = 1;
    let string = '';
    
    while(string.length < summary) {
      string += counter
      counter++
    }
    return counter - 1
}


//or
let n = 0
  for (var i = 1; n < summary; i++){
    n = n+=(i).toString().length;
  } return i-1
//or
function amountOfPages(summary){
    let res = 0;
  
    for (let i = 0; true; i++) {
      if (summary > 0) {
        summary -= 9 * Math.pow(10, i) * (i+1);
        res += 9 * Math.pow(10, i);
      } else {
        res += summary / i;
        break;
      }
    }
    
    return res;
}