/**
You have a queue of integers, you need to retrieve the first unique integer in the queue.

Implement the FirstUnique class:

FirstUnique(int[] nums) Initializes the object with the numbers in the queue.
int showFirstUnique() returns the value of the first unique integer of the queue, 
and returns -1 if there is no such integer.
void add(int value) insert value to the queue.
 */

//create a set for whole queue
//create a set of unique numbers (automatically ordered)
//if a number is added that is not in either set, it gets added to both
//if a number is added that exists only in queue, then continue
//if a number is added and exists in unique, delete from unique
//find first unique returns first value in set of uniques

var FirstUnique = function(nums) {
    this.queue = new Set()
    this.unique = new Set()
    
    for (let num of nums) {
        this.add(num)
    }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    if (this.unique.size > 0) return this.unique.values().next().value
    return -1
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    if (!this.queue.has(value)) this.unique.add(value)
    else if (this.unique.has(value)) this.unique.delete(value)
    this.queue.add(value)
};

//https://leetcode.com/problems/first-unique-number/