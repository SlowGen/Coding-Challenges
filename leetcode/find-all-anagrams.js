/*
Given two strings s and p, return an array of all the start indices of p's anagrams in s. 
You may return the answer in any order.
*/


//sliding window problem
//make a map of p letter count O(p.length)
//make a window of p.length size starting at s[0]
//map letters inside of window and compare to p map, if all match, record index O(s.len - p.len)
//----O(n)

var findAnagrams = function(s, p) {
    const pMap = new Map() //key=char, val=count
    
    for (const char of p) {
        if (pMap.has(char)) pMap.set(char, pMap.get(char) + 1)
        else pMap.set(char, 1)
    }
    
    let start = 0
    let end = p.length - 1
    const results = []
    
    while (end < s.length) {
        const window = s.substring(start, end + 1)
        const sMap = new Map()
        for (const char of window) {
            if (sMap.has(char)) sMap.set(char, sMap.get(char) + 1)
            else sMap.set(char, 1)
        }
        let isMatch = true
        for (const item of pMap) { //[letter, count]
            if (!sMap.has(item[0]) || sMap.get(item[0]) !== item[1]) isMatch = false
        }
        isMatch ? results.push(start) : null
        start++
        end++
    }
    return results
};

//https://leetcode.com/problems/find-all-anagrams-in-a-string/