/**
 
 */

//bfs (using a queue of nodes in that level) with a second queue for the next level
//at each stage, assign nexts in current queue, while populating second queue with children
//once current queue is empty, refill with second queue and continue

var connect = function(root) {
    if (!root) return root
    let queue = [root.left, root.right]
    search(queue)
    return root
};

function search(queue) {
    if (!queue.length) return
    const nextQueue = []
    
    while (queue.length) {
        if (!queue[0]) queue.shift()
        else {
            if (queue.length > 1) queue[0].next = queue[1]
            if (queue[0].left) nextQueue.push(queue[0].left)
            if (queue[0].right) nextQueue.push(queue[0].right)
            queue.shift()
        }
        
    }
    return search(nextQueue)
}

//https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/