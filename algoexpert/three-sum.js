function threeNumberSum(array, targetSum) {
	array.sort((a,b) => a-b)
	const sumSet = []
  for (let i=0; i<array.length; i++) {
		const neededTwoSum = targetSum - array[i]
		const testArray = array.slice(i+1)
		const matches = twoNumberSum(testArray, neededTwoSum)
		if (matches) {
			for (const match of matches) {
				match.unshift(array[i])
				sumSet.push(match)
			}
		}
	}
	return sumSet
}

function twoNumberSum(array, targetSum) {
    const numberMap = new Map()
    let index = 0
    let matchingPairs = []
    while (index < array.length) {
        let match = targetSum - array[index]
        if (numberMap.has(match)) {
            matchingPairs.unshift([match, array[index]])
        } else {
            numberMap.set(array[index])
        }
              index++
    }	
    return matchingPairs.sort((a,b) => a-b)
}

https://www.algoexpert.io/questions/Three%20Number%20Sum