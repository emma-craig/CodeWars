// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
  //look at each element. if !== previous then add it to new array
   if (!iterable) return []
      if (typeof iterable === 'string') iterable = iterable.split('')
    let uniqueArray = []
  for (i=0; i< iterable.length; i++){
   if (i===0 || iterable[i] !== iterable[i-1] ) uniqueArray.push(iterable[i])
  }
    return uniqueArray
}
// or
  var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}