/**
Given a string s, sort it in decreasing order based on the frequency of characters, 
and return the sorted string.

 */

//make map to count frequencies, pull array of entries and sort by frequency
//pop from end of array and use entries to fill results 


var frequencySort = function(s) {
    const chars = new Map()
    for (const char of s) {
        if (chars.has(char)) {
            chars.set(char, chars.get(char) + 1)
        } else chars.set(char, 1)
    }
    
    let charCount = [...chars.entries()]
    charCount = charCount.sort((a,b) => a[1] - b[1])
    
    let results = ''
    
    while (charCount.length) {
        let next = charCount.pop()
        while (next[1] > 0) {
            results += next[0]
            next[1]--
        }
    }
  return results  
};

//https://leetcode.com/problems/sort-characters-by-frequency/