/**
 Given the root of a binary tree, each node has a value from 0 to 25 representing the 
 letters 'a' to 'z': a value of 0 represents 'a', a value of 1 represents 'b', and so on.

Find the lexicographically smallest string that starts at a leaf of this tree and ends at the root.

(As a reminder, any shorter prefix of a string is lexicographically smaller: 
    for example, "ab" is lexicographically smaller than "aba".  A leaf of a node is a node that has no children.)

 */


//DFS with backtracking recording chars in a path
//when a leaf is reached, compare path to smallest, replace if smaller


var smallestFromLeaf = function(root) {
    let smallest = '~'
    
    function search(node, path) {
        if (!node) return
        let value = node.val + 10
        
        path = value.toString(36) + path
        
        if (!node.left && !node.right && path < smallest) smallest = path
        
        search(node.left, path)
        search(node.right, path)
        path = path.slice(1)
    }
    
    search(root, '')
    return smallest
};

//https://leetcode.com/problems/smallest-string-starting-from-leaf/