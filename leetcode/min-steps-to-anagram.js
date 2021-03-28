/**
Given two equal-size strings s and t. In one step you can choose any character of t and replace it with 
another character.
Return the minimum number of steps to make t an anagram of s.
An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.
 */


//map of each string, counting char recurrence. key=char, val=num recur
//iterate through s, check both map with char key and see if vals match
//increase "steps" by diff of vals to equal s
//increase steps by 1 if char does not exist in t-map

var minSteps = function(s, t) {
    const mapS = new Map()
    const mapT = new Map()
    
    let steps = 0;
    
    for (const char of s) {
        if (mapS.has(char)) {
            let val = mapS.get(char)
            val++
            mapS.set(char, val)
        } else mapS.set(char, 1)
    }
    
    for (const char of t) {
        if (mapT.has(char)) {
            let val = mapT.get(char)
            val++
            mapT.set(char, val)
        } else mapT.set(char, 1)
    }
    
    for (const char of s) {
        if (mapT.has(char)) {
            let sVal = mapS.get(char)
            let tVal = mapT.get(char)
            if (tVal < sVal) {
                steps += sVal - tVal
                mapT.set(char, sVal)
            }
        } else steps++
    }
    
    return steps
};

//https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/