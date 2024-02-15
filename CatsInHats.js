function height(n) {
    console.log(n)
    const catHeight = 2000000
    // make array of cats heights
    let heightsArray = []
    heightsArray[0] = 2000000.0000
    for (i= 1; i <n +1; i ++) {
      heightsArray[i] = heightsArray[i-1]/2.5
      console.log(heightsArray)
    }
  //use reduce to add 2.5*cat for n cats
    return totalHeight = heightsArray.reduce((total, el) => total+el, 0).toFixed(3)
    
    // OR return (2000000 * (1 - Math.pow(0.4, n + 1)) / (1 - 0.4)).toFixed(3);
  
  }

  // or
  function height(n) {
    let currentCat = 2000000,totalHeight  = 2000000
    for (let i = 0; i < n; i++) {
      currentCat = currentCat / 2.5
      totalHeight += currentCat
    }
    return totalHeight.toFixed(3)
  }