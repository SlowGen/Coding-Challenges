/**
count number of islands in given grid (land is '1', water is '0')
 */
 var numIslands = function(grid) {
    //implement dfs, looks through neighbors and marks as visited
    //iterate through looking for islands
    //if island is found, counter++, call dfs
    
    let islands = 0;
    
    const rows = grid.length
    const columns = grid[0].length
    
    function dfs (row, column, grid) {
        if (!grid[row] || !grid[row][column] || grid[row][column] === '0') return;
        grid[row][column] = '0'
        dfs(row+1, column, grid)
        dfs(row-1, column, grid)
        dfs(row, column+1, grid)
        dfs(row, column-1, grid)
    }
    
    
    for (let row=0; row< rows; row++) {
        for (let column=0; column<columns; column++) {
            if (grid[row][column] === '1') {
                islands++
                dfs(row, column, grid)
            }
        }
    }
    return islands;
};

//https://leetcode.com/problems/number-of-islands/