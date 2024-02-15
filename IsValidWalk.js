function isValidWalk(walk) {

 // make count hash
//   const directionsCount = {};

//   // Iterate through each character in the string
//   for (const char of walk) {
//     // Update the count in the charCounts object
//     directionsCount[char] = (directionsCount[char] || 0) + 1;
//   }
//   const N = directionsCount["n"] ?? 0;
//   const S = directionsCount["s"] ?? 0;
//   const E = directionsCount["e"] ?? 0;
//   const W = directionsCount["w"] ?? 0;

//   const returnsToStart = N - S + E - W === 0 ? true : false;
//   const takesTenMinutes = N + S + E + W === 10 ? true : false;

//   return returnsToStart && takesTenMinutes;

  // or

  const north = walk.filter(dir => dir === 'n').length
  const south = walk.filter(dir => dir === 's').length
  const east = walk.filter(dir => dir === 'e').length
  const west = walk.filter(dir => dir === 'w').length
 return walk.length  === 10 && north === south && east === west
}


