function dnaStrand(dna){
  
    const dnaComplement = {
      'A': 'T',
      'G': 'C',
      'T': 'A',
      'C': 'G'
      
    }
    return dna.split('').map(el => dnaComplement[el]).join('')}

    // or

    // function DNAStrand(dna) {
//   return dna.replace(/./g, function(c) {
//     return DNAStrand.pairs[c]
//   })
// }

// DNAStrand.pairs = {
//   A: 'T',
//   T: 'A',
//   C: 'G',
//   G: 'C',
// }