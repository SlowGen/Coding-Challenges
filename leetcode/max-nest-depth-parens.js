var maxDepth = function(s) {
    //make a stack and iterate through matching parenth
    //count pairs for each set, keep track of max pairs
    //return max count
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