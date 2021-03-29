/**
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 */

//map first string
//compare second string,if there is a duplicate entry, decrement OR delete it
//return true if map is empty, false otherwise

var isAnagram = function(s, t) {
    const chars = new Map();
    
    for (const char of s) {
        if (chars.has(char)) {
            let count = chars.get(char)
            chars.set(char, count+1)
        } else chars.set(char, 1)
    }
    
    for (const letter of t) {
        if (chars.has(letter)) {
            let count = chars.get(letter)
            if (count === 1) chars.delete(letter)
            else chars.set(letter, count-1)
        } else return false
    }
    return chars.size === 0
};

//https://leetcode.com/problems/valid-anagram/