/**
 Given the root of a binary tree, calculate the vertical order traversal of the binary tree.
 The vertical order traversal of a binary tree is a list of top-to-bottom orderings for each 
 column index starting from the leftmost column and ending on the rightmost column. 
 There may be multiple nodes in the same row and same column. 
 In such a case, sort these nodes by their values.

 Return the vertical order traversal of the binary tree.
 */

 var verticalTraversal = function(root) {
    //dfs
    //record location with row, col and val
    //do fancy sort algo
    //filter results into array, push to final
    
    let verticals = []  //final return
    
    let locations = []  //storing data from dfs
    
    function dfs(currentNode, row, column) {
        if (currentNode === null) return
        
        locations.push([column, row, currentNode.val])
        
        if (currentNode.left) dfs(currentNode.left, row + 1, column -1)
        if (currentNode.right) dfs(currentNode.right, row + 1, column + 1)        
    }
    
    let currentNode = root
    let row = 0;
    let column = 0;
    
    dfs(currentNode, row, column)
    
    locations.sort((a,b) => a[0] === b[0] ? 
                   (a[1] === b[1] ? a[2] - b[2] : a[1] - b[1]) :  a[0] - b[0])
    
    let firstCol = locations[0][0]
    let lastCol = locations[locations.length-1][0]
    
    for (let i=firstCol; i<=lastCol; i++) {
        let thisCol = locations.filter(loc => loc[0] === i)
        let verts = []
        thisCol.forEach(col => verts.push(col[2]))
        verticals.push(verts)
    }
    return verticals
};

//https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/