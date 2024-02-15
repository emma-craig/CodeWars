const SumToBinary = (num1, num2) => {
let sum = num1 + num2;
let binary = ""
while (sum > 0) {
    let digit = sum % 2;
    binary += digit
    sum = parseInt(sum/2)
}
return binary

}


// or
// function addBinary(a,b){
//  return (a+b).toString(2)
// }
