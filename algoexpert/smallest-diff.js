function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a,b) => a-b);
	arrayTwo.sort((a,b) => a-b);
	let pointerOne = 0
	let pointerTwo = 0
	let smallestDiff = Infinity
	let diff = -Infinity
	let returnPair = []
	while (pointerOne < arrayOne.length && pointerTwo < arrayTwo.length) {
		const valueOne = arrayOne[pointerOne]
		const valueTwo = arrayTwo[pointerTwo]
		if (diff === 0) return [valueOne, valueTwo]
		if (valueOne < valueTwo) {
			diff = valueTwo - valueOne
			pointerOne++
		} else if (valueTwo < valueOne) {
			diff = valueOne - valueTwo
			pointerTwo++
		} else return [valueOne, valueTwo]
		if (smallestDiff > diff) {
			smallestDiff = diff
			returnPair = [valueOne, valueTwo]
		}
	}
	return returnPair
}
