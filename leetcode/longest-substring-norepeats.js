/**
Given a string s, find the length of the longest substring without repeating characters.
 */

//use sliding window approach
//pointerA, pointerB. move pointerB recording each char
//into a Set, while no matches in set, update window size, keep track of biggest window
//once a repeat is hit, move pointerA++ and pointerB back to beginning
//once start reaches a point where no new strings can be longer than longest, break out.


var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let start = 0;
    
    while (s.length - start > longest || start < s.length) {
        const substring = new Set();
        let current = 0;
        let end = start
        while (end < s.length) {
            if (substring.has(s[end])) {
                break;
            } else {
                substring.add(s[end])
                current++
                end++
                current > longest ? longest = current : null
            }
        }
        start++
    }
    return longest
};

//https://leetcode.com/problems/longest-substring-without-repeating-characters/