//Given an integral number, determine if it's a square number:



const isSquare = n => Number.isInteger(Math.sqrt(n))
// or   return Math.sqrt(n) % 1 === 0;
