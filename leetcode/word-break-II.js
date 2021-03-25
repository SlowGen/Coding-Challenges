/**
 Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where
  each word is a valid dictionary word. Return all such possible sentences in any order.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 */

 var wordBreak = function(s, wordDict) {
    //backtrack DFS algo
    //when reached end of string, test answer to see if it's a full answer
    //concat full answers and push to results
    //return final result
    
    const words = new Set(wordDict)
    
    const results = [];
    
    function backtrackDFS(string, words, answer) {
        let current = '';
        for (let i=0; i<string.length; i++) {
            current += string[i]
            if (words.has(current)) {
                answer.push(current)
                backtrackDFS(string.slice(i+1), words, answer);
                answer.pop();
            }
        }
        let answerLength = 0;
        answer.forEach(word => answerLength+= word.length)
        if (s.length === answerLength) {
            let final = ''
            answer.forEach(word => final += word + ' ')
            results.push(final.trim())
        }
    }
    
    const answer = [];
    backtrackDFS(s, words, answer)
    return results;    
};

//https://leetcode.com/problems/word-break-ii/