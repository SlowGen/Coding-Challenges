/**
 Given a string s and a dictionary of strings wordDict, return true if s can be segmented into 
 a space-separated sequence of one or more dictionary words.

 Note that the same word in the dictionary may be reused multiple times in the segmentation.
*/

 var wordBreak = function(s, wordDict) {
    // convert dictionary to Set for easy look-up
    const words = new Set(wordDict);
    
    let visited = [] //this is to keep track of sections we already know are in our dictionary
    
    const queue = [0];  //start at the beginning
    
    while (queue.length) {
        const start = queue.pop();
        
        if (visited[start]) continue   //check if we've done this section before, skip if true
        
        for (let end = start + 1; end <=s.length; end++) {
            if (words.has(s.substring(start, end))) {    //iterate through WHOLE string finding any valid words
                queue.push(end)                         //record the END of each valid word in our queue
                if (end === s.length) return true       //if we make to the end, and that substring is valid, true
            }
        }
        visited[start] = true           //mark that start section as done
    }
    return false
};

//https://leetcode.com/problems/word-break/