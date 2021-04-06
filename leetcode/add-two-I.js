/**
 You are given two non-empty linked lists representing two non-negative integers. 
 The digits are stored in reverse order, and each of their nodes contains a single digit. 
 Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */


//maintain a carry variable and a result list
//cacluate addition, update value in result with sum value, update carry as needed
//maintain checks for null nodes
//return results

var addTwoNumbers = function(l1, l2) {
    let result = new ListNode()
    let carry = 0;
    let current1 = l1
    let current2 = l2
    let sums = result
    
    while (current1 || current2 || carry > 0) {

        const val1 = current1 ? current1.val : 0
        const val2 = current2 ? current2.val : 0
        const sum = val1 + val2 + carry
        if (sum > 9) carry = Math.floor(sum / 10)
        else carry = 0
        
        sums.val = sum % 10
        current1 ? current1 = current1.next : current1 = null
        current2 ? current2 = current2.next : current2 = null
        if (current1 || current2 || carry > 0) {
            sums.next = new ListNode()
            sums = sums.next
        }
    } 
    return result  
};

//https://leetcode.com/problems/add-two-numbers/