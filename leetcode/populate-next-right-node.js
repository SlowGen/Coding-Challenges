/**
You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. 
The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. 
If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Follow up:
You may only use constant extra space.
Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.

*/

//we can take advantage of the fact that we know this is a perfect binary tree
//and that we can access children from parent
//assign nexts of children to bridge gap while still on parent node
//continue traversal using the nexts already assigned

 var connect = function(root) {
    if (!root) return root
  let leftEdge = root
   while (leftEdge.left) {
       let current = leftEdge   //this is so we always start each level all the way at the left
       while (current) {
           current.left.next = current.right  //assign direct next
           if (current.next) current.right.next = current.next.left //use this next to bridge the gap
           current = current.next //traverse along the level
       }
       leftEdge = leftEdge.left  //traverse to next level
   }
  return root
};

//https://leetcode.com/problems/populating-next-right-pointers-in-each-node/