/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.
*/

//eliminate all null lists and sort by head val
//----this takes a little extra time, but simplifies the algorithm a lot

//keep lists[0] as the 'main' list and merge subsequent lists into it
//pop list off lists (until there is only last main one left)
//loop through merging each one at a time


var mergeKLists = function(lists) {
    if (!lists.length) return null
    
    //first get rid of empties
    let newList = []
    for (const list of lists) {
        if (list) newList.push(list)
    }
    lists = newList
    
    if (lists.length === 1) return lists[0]
    
    lists = lists.sort((a,b) => a.val - b.val)  //sort remaining nodes
    
    const fakeHead = new ListNode(0, lists[0])   //placeholder for prevNode that must be maintained
    
    while (lists.length > 1) {
        let prevHead = fakeHead
        let current = fakeHead.next
        let queue = [lists.pop()]
        
        while (queue.length) {
            if (!current) current = queue.shift()
            if (queue.length && current.val <= queue[0].val) {
                prevHead = current
                current = current.next
            }
            else if (current.next) {
                queue.push(current)
                prevHead.next = queue.shift()
                prevHead = prevHead.next
                current = prevHead.next
            } else {
                queue.push(current)
                current = queue.shift()
                prevHead.next = current
            }
        }
    }
    return lists[0]
};
