/**
 * 
 Given an integer array nums, move all 0's to the end of it while maintaining the 
 relative order of the non-zero elements.

 Note that you must do this in-place without making a copy of the array.
 */



//keep a pointer that is the "not done left"
//iterate through looking for non-zeroes, when a non-zero is found
//copy that value to the 'not done left' spot and then move the pointer +1
//when iteration is complete, all remaining slots from pointer on are zeroes

var moveZeroes = function(nums) {
    let left = 0
    for (const num of nums) {
        if (num !== 0) {
            nums[left] = num
            left++
        }
    }
    while (left < nums.length) {
        nums[left] = 0
        left++
    }
    return nums
};

//https://leetcode.com/problems/move-zeroes/