//build the basic candy crush algo, gem matches are 3+ and upper level gems
//must drop down to fill space of crushed gems. No new gems are generated from top, 0 is placed
//where empty space exists

/**
 * @param {number[][]} board
 * @return {number[][]}
 */
 var candyCrush = function(board) {
    let isStable = false;
    let height = board.length;
    let width = board[0].length;
    
        //do horizontal
    while (!isStable) {
        isStable = true;
        for (let row=0; row<height; row++) {
            for (let column=0; column<width-2; column++) {
                let gem1 = Math.abs(board[row][column])
                let gem2 = Math.abs(board[row][column + 1])
                let gem3 = Math.abs(board[row][column + 2])

                if (gem1 === gem2 && gem2 === gem3 && gem1 !=0) {
                    board[row][column] = board[row][column+1] = board[row][column+2] = -gem1;
                    isStable = false;
                }
            }
        }
        
        //do vertical
        
        for (let row=0; row<height-2; row++){
             for (let column=0; column<width; column++) {
                let gem1 = Math.abs(board[row][column]);
                let gem2 = Math.abs(board[row+1][column]);
                let gem3 = Math.abs(board[row+2][column]);

                if (gem1 === gem2 && gem2 === gem3 && gem1 != 0) {
                    board[row][column] = board[row+1][column] = board[row+2][column] = -gem1;
                    isStable = false
                }
            }
        }
       
        //do drops
        if (!isStable) {
            for (let column=0; column<width; column++) {
                let bottom = height -1
                for (let row=bottom; row>=0; row--) {
                    if (board[row][column] > 0) {
                        board[bottom][column] = board[row][column]
                        bottom--
                    }
                }
                while (bottom >= 0) {
                    board[bottom][column] = 0;
                    bottom--
                    }
            }
        }
    }
        
    return board
};

//https://leetcode.com/problems/candy-crush/