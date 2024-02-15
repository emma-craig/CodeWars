// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

const adjacentProducts = arr => {
        // loop throgh array from index ===1 and multiply with i-1.
        const products = []
        for (i=1; i< arr.length; i++) {
        // push all products to new array
products.push(arr[i-1] * arr[i])
        }
        // sort it and return the first
        products.sort((a,b) => b-a)
        return products[0]
        // or
        //   return Math.max(...newArr)

      }
