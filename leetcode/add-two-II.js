/**
 You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.
 */

// iterate through, putting values of each into own stack
// pop each off stack, add, keep track of a carry for next iteration
// shift into results array (to preserve order)
//iterate through results to create return LL


var addTwoNumbers = function(l1, l2) {
    const l1Stack = populateStack(l1)
    const l2Stack = populateStack(l2)
    const results = []
    
    if (l1Stack.length !== l2Stack.length) {  //make results arrays the same length 
        if (l1Stack.length > l2Stack.length) {
            let n = l1Stack.length - l2Stack.length
            while (n > 0) {
                l2Stack.unshift(0)
                n--
            }
        }
        else {
            let n = l2Stack.length - l1Stack.length
            while (n > 0) {
                l1Stack.unshift(0)
                n--
            }
        }
    }
    
    let carry = 0
    
    while (l1Stack.length) {
        let num1 = l1Stack.pop()
        let num2 = l2Stack.pop()
        let sum = num1 + num2 + carry
        if (sum > 9) carry = Math.floor(sum / 10)
        else carry = 0
        results.unshift(sum % 10)
    }
    
    if (carry > 0) results.unshift(carry)
    
    const answer = new ListNode(results.shift())
    let current = answer
    while (results.length) {
        current.next = new ListNode()
        current = current.next
        current.val = results.shift()
        
    }
    return answer
};

function populateStack(list) {  //returns array
    let stack = []
    let current = list
    while (current) {
        stack.push(current.val)
        current = current.next
    }
    return stack
}

//https://leetcode.com/problems/add-two-numbers-ii/