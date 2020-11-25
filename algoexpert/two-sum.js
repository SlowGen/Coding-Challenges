function twoNumberSum(array, targetSum) {
    // Write your code here.
      const numberMap = new Map()
      let sumFound = false
      let index = 0
      let matchingPair = []
      while (!sumFound && (index < array.length)) {
          let match = targetSum - array[index]
          if (numberMap.has(match)) {
              matchingPair.push(match, array[index])
              sumFound = true
          } else {
              numberMap.set(array[index])
              index++
          }
      }	
      return matchingPair
  }
  