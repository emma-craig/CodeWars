function sumOfParts(num) {
    return num.split('').reduce((a, b) => a + +b, 0)
} 

function orderWeight(string) {
     return string
        .split(' ')
        .sort((a, b) => sumOfParts(a) - sumOfParts(b) || a > b || -(a < b))
        .join(' ');
}