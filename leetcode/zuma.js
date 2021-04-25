//findMinStep(board, hand)

//inputs are all strings
//'board' is a line of 'balls'
//max moves is always number of balls in hand, find min moves to make an empty board

//this is a thus far not working attempt to find a different solution than the standard backtrack
//ulitmately, it is becoming just as convoluted as the backtrack solution is



function findMinStep(board, hand) {
    const inHand = new Map()
    const balls = new Map()
    let steps = 0

    function populateBalls (map, source) {
        map.clear()
        for (const item of source) {
            if (map.has(item)) {
                let amnt = map.get(item)
                map.set(item, amnt+1)
            } else map.set(item, 1)
        }
    }

    function crushBoard(board) {
        let hasChanges = true
        
        while (hasChanges && board.length) {
            let current = ''
            let updated = ''
            hasChanges = false
            for (const ball of board) {
                if (current === '' || ball === current[0]) current += ball
                else {
                    if (current.length >= 3) {
                        hasChanges = true
                        current = ball
                    } else {
                        updated += current
                        current = ball
                    }
                }
            }
            current.length >=3 ? current = '' : null
            board = updated + current
        }
        return board
    }

    populateBalls(inHand, hand);
    populateBalls(balls, board)

    while (inHand.size > 0) {
        let boardSize = board.length
        for (const ball of balls) {  //array [ball, count]
            let amntInHand = inHand.get(ball[0])
            let numOnBoard = balls.get(ball[0])
            if (numOnBoard === 1 && amntInHand >= 2) {
                board = board.replace(ball[0], '')
                balls.delete(ball[0])
                steps += 2
                if (amntInHand > 2) inHand.set(ball[0], amntInHand - 2)
                else inHand.delete(ball[0])
            }
            if (numOnBoard === 2 && amntInHand >= 1) {
                board = board.replace(ball[0], ball[0]+ball[0])
                balls.set(ball[0], numOnBoard + 1)
                if (amntInHand > 1) inHand.set(ball[0], amntInHand - 1)
                else inHand.delete(ball[0])
                steps++
            }
        }
        board = crushBoard(board)
        if (board.length === boardSize) return -1
        if (!board.length) {
            return steps
        }
        populateBalls(balls, board);
    }
    return -1
}

