/**
Given a string s, return the first non-repeating character in it and return its index. 
If it does not exist, return -1.
 */

//map chars, key=char, val=count
//iterate through map to find a key with val of 1
//return index of key in s

var firstUniqChar = function(s) {
    const chars = new Map();
    
    for (const char of s) {
        if (chars.has(char)) {
            let count = chars.get(char)
            chars.set(char, count+1)
        } else chars.set(char, 1)
    }
    
    const nonRepeats = []
    
    chars.forEach((value, key) => value === 1 ? nonRepeats.push(key) : null)
    
    return s.indexOf(nonRepeats[0])
    
};

//and a two map solution (faster)

const firstUniqChar2Maps = function(s) {
    const unique = new Set()
    const indexes = new Map()

    for (let i=0; i<s.length; i++) {
        if (indexes.has(s[i])) unique.delete(s[i])
        else {
            unique.add(s[i])
            indexes.set(s[i], i)
        }
    }

    if (unique.size > 0) return indexes.get(unique.keys().next().value)
    return -1
}


//https://leetcode.com/problems/first-unique-character-in-a-string/