/*
Given an array of integers nums and an integer target, return indices of the two numbers such 
that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/


//iterate through, making a map while we go
//each key in the set is a number we are LOOKING for (target - num), val = index
//at each iteration we will check the set to see if it is a number that is needed
//thereby ensuring we have its partner
//return val from map and iteration index

var twoSum = function(nums, target) {
    const map = new Map()
    
    for (let i=0; i<nums.length; i++) {
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i]
        } else map.set(target-nums[i], i)
    }
};

//https://leetcode.com/problems/two-sum/