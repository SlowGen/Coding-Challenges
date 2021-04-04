/**
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are 
horizontally or vertically neighboring. The same letter cell may not be used more than once.
 */

//backtrackdfs, with a visited set (coordinates)
//iterate through looking for first letter. Once a first letter candidate is found, run dfs
//from that letter looking for adjacent second letter, marking first letter visited
//iterate through word, looking for successive children

var exist = function(board, word) {
    const visited = new Set()
    let exists = false
    
    function search(row, col, targetIndx, visited) {
        const location = `${row}x${col}`
        if (!board[row] || !board[row][col] || visited.has(location)) return
        visited.add(location)
        if (board[row][col] === word[targetIndx]) {
            if (targetIndx === word.length -1) {
                exists = true
                return
            }
            search(row-1, col, targetIndx+1, visited)
            search(row+1, col, targetIndx+1, visited)
            search(row, col-1, targetIndx+1, visited)
            search(row, col+1, targetIndx+1, visited)
        }
        
        visited.delete(location)
    }
    
    //iterate search
    const height = board.length
    const width = board[0].length
    
    for (let row=0; row<height; row++) {
        for (let col=0; col<width; col++) {
            if (board[row][col] === word[0]) search(row, col, 0, visited)
        }
    }
    return exists
};

//https://leetcode.com/problems/word-search/