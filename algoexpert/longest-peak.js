// given an array of integers, find the longest peak. A peak is defined as having a start with a continuous rise, 
// a single max "peak" and then a continuous decline to an end point. There can be more than one peak in the array,
// or no peaks


function longestPeak(array) {
	if (array.length < 3) return 0;
	
	let longest = 0;
	let peaks = [];
	
    //find peaks
	for (let i=1; i<array.length -1; i++) {
		if (array[i] > array[i-1] && array[i] > array[i+1]) {
			peaks.push(i);
		}
	}
	
    //measure length of each peak
	for (const peak of peaks) {
		let start = peak - 1;
		let end = peak + 1;
		while (start > 0 && array[start] > array[start-1]) {
			start--;
		}
		while (end < array.length -1 && array[end] > array[end+1]) {
			end++;
		}
		const length = end - start + 1;
		if (length > longest) longest = length
	}
	return longest
}

//https://www.algoexpert.io/questions/Longest%20Peak