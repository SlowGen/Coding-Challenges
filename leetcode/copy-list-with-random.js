/*
A linked list of length n is given such that each node contains an additional random pointer, 
which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, 
where each new node has its value set to the value of its corresponding original node. 
Both the next and random pointer of the new nodes should point to new nodes in the copied list 
such that the pointers in the original list and copied list represent the same list state. 
None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, 
then for the corresponding two nodes x and y in the copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes. 
Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, 
or null if it does not point to any node.
Your code will only be given the head of the original linked list.
*/

//each node has this.val, this.next and this.random
//this.random can point to any other node or be null
//make whole brand new copy of list, all pointers point to new list, but are otherwise exactly the same
//new Node(val, next, random)

//make a map, key = old node, val = new node 
//while populating current, also add random and next with null values if necessary
//in the same pass, assign new to the new randoms and nexts (null if necessary)
//as it iterates through the map, it automatically updates when values are found, taking out the nulls
//this auto populates the whole new list without any extra steps (time and space are O(n))
//return head of new list

function copyRandomList(head) {
    if (!head) return null
    const nodeMap = new Map()

    let currentOld = head
    while (currentOld) {
        let current = currentOld
        let next = currentOld.next
        let random = currentOld.random
        if (!nodeMap.has(current)) nodeMap.set(current, new Node(current.val))
        if (!nodeMap.has(next)) !next ? nodeMap.set(next, null) : nodeMap.set(next, new Node(next.val))
        if (!nodeMap.has(random)) !random ? nodeMap.set(random, null) : nodeMap.set(random, new Node(random.val))
        let newNode = nodeMap.get(current)
        newNode.next = nodeMap.get(next)
        newNode.random = nodeMap.get(random)
        currentOld = currentOld.next
    }

    return nodeMap.get(head)
}

//https://leetcode.com/problems/copy-list-with-random-pointer/