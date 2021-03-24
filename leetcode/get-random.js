/**
 Implement the RandomizedSet class:

*RandomizedSet() Initializes the RandomizedSet object.
*bool insert(int val) Inserts an item val into the set if not present. 
    Returns true if the item was not present, false otherwise.
*bool remove(int val) Removes an item val from the set if present. 
    Returns true if the item was present, false otherwise.
*int getRandom() Returns a random element from the current set of elements 
    (it's guaranteed that at least one element exists when this method is called). 
    Each element must have the same probability of being returned.
 */

 var RandomizedSet = function() {
    this.set = new Set()
};

RandomizedSet.prototype.insert = function(val) {
    if (this.set.has(val)) return false;
    this.set.add(val);
    return true;
};

RandomizedSet.prototype.remove = function(val) {
    if (!this.set.has(val)) return false;
    this.set.delete(val);
    return true;
};

RandomizedSet.prototype.getRandom = function() {
    const choices = [...this.set];
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
};

//https://leetcode.com/problems/insert-delete-getrandom-o1/