// This algo determines whether any given subsequence exists inside of a given array
// For example: if array = [1, 2, 3, 4] and sequence = [1, 3, 4] is TRUE



function isValidSubsequence(array, sequence) {
  let answer = true
	let pointer = 0
	for (let i = 0; i < sequence.length; i++) {
			pointer = array.indexOf(sequence[i], pointer)
			if (pointer === -1) answer = false
			pointer += 1
		}
	return answer
}

//https://www.algoexpert.io/questions/Validate%20Subsequence
