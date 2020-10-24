/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const addTwoNumbers = (l1, l2) => {
  let carry = 0
  let result = 0
  let resultArray = []
  let returnList = new ListNode()
  let path1 = l1.next
  let list1 = [l1.val]
  let path2 = l2.next
  let list2 = [l2.val]
  while ((path1) && (path2)) {
    console.log('list1', list1)

    list1.push(path1.val)
    list2.push(path2.val)
    list1 = list1.next
    list2 = list2.next
  }
    while ((list1) && (list2)) {
    for (let i=0; i<list1.length; i++) {
      result = list1[i] + list2[i] + (carry * 10)
      if (result > 10) {
        carry = Math.floor(result.val / 10)
        result = result % 10
      } else {carry = 0}
      resultArray.push(result)
    }
  }
    return resultArray

}

const nextNext = new ListNode(3)
const next = new ListNode(4, nextNext)
const l1 = new ListNode(2, next)

const next2Next = new ListNode(4)
const next2 = new ListNode(6, next2Next)
const l2 = new ListNode(5, next2)

console.log(addTwoNumbers(l1, l2))


// https://leetcode.com/problems/add-two-numbers/
