/**
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets 
is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; 
No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and 
that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].
 */


 var decodeString = function(s) {
    //make stack, add to stack if != ]
    //if =], process backwards to number, join stack
    const stack = [];
    
    for (let char of s) {
        if (char !== ']') stack.push(char);  //add to stack if not the end of a code
        else {   //when end of a 'code' is reached
            let currentString = ''
            while (stack[stack.length -1] !== '[') {    //count backwards through stack, creating code string
                currentString = stack.pop() + currentString   //preserves order
            }
            stack.pop();  //removes '['
            
            let kChar = ''; 
            
            while (Number.isInteger(Number.parseInt(stack[stack.length -1], 10))) {
                kChar = stack.pop() + kChar     //takes out numbers to get k
            }
            
            let k = Number.parseInt(kChar, 10);
            
            while (k > 0) {
                stack.push(currentString)    //return decoded string to stack
                k--
            }
        }
    }
    return stack.join('')
};

//https://leetcode.com/problems/decode-string/