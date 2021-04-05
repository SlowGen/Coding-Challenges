/**
 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input 
 string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

 */
//make maps as a dictionary for easy look-up
//make a stack, add opening chars to stack
//return false if a closer shows up and doesn't immediately have a partner opener at the end
//of the stack
//if it does have a partner, pop from stack and continue

var isValid = function(s) {
    if (s.length % 2 !== 0) return false
    
    const openers = new Map([['(', ')'], ['{','}'], ['[', ']']])
    
    const closers = new Map([[')', '('], ['}', '{'], [']', '[']])
    
    const stack = []
    for (let char of s) {
        if (openers.has(char)) stack.push(char)
        else {
            if (stack.pop() !== closers.get(char)) return false
        }
    }
    return stack.length ? false : true
};

//https://leetcode.com/problems/valid-parentheses/