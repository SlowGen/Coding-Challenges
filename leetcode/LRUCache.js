/**
 
 */

//one map chache key&val as given with .put
//EVERY action / access to map deletes the entry and recreates it
//this MUST be done to preserve access order, without increasing time complexity
//Map will always return values in order (built in)


var LRUCache = function(capacity) {
    this.cache = new Map();
    this.cap = capacity
};

LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        const val = this.cache.get(key)    //preserve value assoc with key
        this.cache.delete(key)             //delete to preserve access order
        this.cache.set(key, val)           //reset, now is latest used
        return val
    }
    return -1
};

LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this.cache.delete(key)                //delete to preserve access order
        this.cache.set(key, value)            //reset with new value
    } else {
        this.cache.set(key, value)           //for some reason (?) must add first, then check size and delete
        let currentSize = this.cache.size
        if (currentSize > this.cap) this.cache.delete(this.cache.keys().next().value)
    }
    
};

//https://leetcode.com/problems/lru-cache/