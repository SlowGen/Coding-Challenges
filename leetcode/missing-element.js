/**
Given an integer array nums which is sorted in ascending order and all of its elements are 
unique and given also an integer k, return the kth missing number starting from the leftmost 
number of the array.
 */

//nums is already sorted, all unique
//create a missing variable
//while k > 0
//iterate through nums with a 'currentNum'
//if num[i+1] is not num[i] + 1, add to missing, decrement k

var missingElement = function(nums, k) {
    let missing;
    
    for (let i=0; i<nums.length; i++) {
        let currentNum = nums[i]
        if (nums[i+1]) {
            while (currentNum < nums[i+1] - 1) {
                if (k === 0) break;
                missing = currentNum + 1
                currentNum++
                k--
            }
        } else {
            while (k > 0) {
                missing = currentNum + 1
                currentNum++
                k--
            }
        }
    }
    return missing
    
};

//https://leetcode.com/problems/missing-element-in-sorted-array/