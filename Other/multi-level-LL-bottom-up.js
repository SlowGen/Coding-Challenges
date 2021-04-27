/**
 * This question was not anywhere on any of the coding sites, but was given to me by a fellow
 * engineer for practice.
 * 
 * Given a multi-levelQueue linked list (has this.child and this.next pointers) return a list of the values
 * in order, from the bottom levelQueue up
 * 
 * 1-2-3-4
 *   |   -----|
 *    5-6-7    8-9
 *      |
 *      10-11-12
 * would return [10,11,12,5,6,7,8,9,1,2,3,4]
 */     

//one stack and two queues, a current array and a return array
//traverse list, recording values into current array
//if any children are hit, put children into a placeholder queue (for the next round)
//when this.next === null and queue is exhausted, put current array into the stack (as an array)
//place accumulated children into queue, repeat building the next stack
//so on and so forth until queue is empty and no more children to populate
//use stack to populate results in order
//final results is from stack
//O(n)  ---one pass over list, touches each node only once


function levels(list) {
    const levelStack = []
    let levelQueue = [list]
    let nextLevel = []

    const results = []

    while (levelQueue.length) {
        let currentNode = levelQueue.shift()
        let currentValues = []
        while (currentNode) {
            currentValues.push(currentNode.val)
            if (currentNode.child) nextLevel.push(currentNode.child)
            currentNode = currentNode.next
        }
        if (!levelQueue.length) {
            levelQueue = [...nextLevel]
            nextLevel = []
            levelStack.push([...currentValues])
        }
    }
    while (levelStack.length) {
        let nums = levelStack.pop
        results.push(...nums)
    }
    return results
}