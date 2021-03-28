/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/


//set range for current node values (starts at Infinity)
//dfs traversal, checking if val fits in range
//return dfs on right and left with updated ranges


var isValidBST = function(root) {
    let min = -Infinity;
    let max = Infinity;
    
    return dfs(root, min, max)
};

function dfs(root, min, max) {
    if (!root) return true
    if (min >= root.val || max <= root.val) return false
    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max)
}