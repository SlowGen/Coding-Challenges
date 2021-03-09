var maxDepth = function(s) {
    //since the prompt clarifies that valid parentheses pairs are always input, we can assume that every opener
    //has a closer. Using this assumption, we simply need to calculate the max openers still open at every point
    //and discontinue counting them once they have closed


    let max = 0;
    let current = 0;
    
    for (let char of s) {
        if (char === '(') current++;
        if (current > max) max = current;
        if (char === ')') current--;
    }
    
    return max
};

// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/