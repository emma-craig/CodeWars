// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

const BreakCamelCase = (str) => {
    // find a pattern of lowercase ([a-z])followed by upper case([A-Z]) and replace with a space in between - "$1 $2"

    str = str.replace(/([a-z])([A-Z])/g, "$1 $2")
}

// or

// function solution(string) {
//   string = string.split('').map(function (el) {
//     if (el === el.toUpperCase()) {
//       el = ' ' + el
//     }
//     return el
//   })
//   return string.join('')
// }

// or 

// function solution(string) {
//     return(string.replace(/([A-Z])/g, ' $1'));
  
//   }