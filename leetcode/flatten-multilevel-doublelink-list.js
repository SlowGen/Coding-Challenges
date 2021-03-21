/*
Given a multi-level, doubly linked-list, flatten to a single level double linked list.
Children must be placed in order immediately after their parent
*/

var flatten = function(head) {
    
    // skipping a null list
    if (head === null) return head
    
    //run DFS, reassigning next to children and children to null
    //keep an open stack to run the while loop, until all run through
    let stack = ['placeholder'];
    let current = head;
    
    while (stack.length) {
        if (current.child) {
            if (current.next) stack.push(current.next)
            current.next = current.child
            current.child = null
            current.next.prev = current
            current = current.next
        } else if (current.next) {
            current = current.next
        } else if (stack.length > 1) {
            current.next = stack.pop();
            current.next.prev = current
            current = current.next
        } else stack.pop();
    }
    return head;
};

//https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/