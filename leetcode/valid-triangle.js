/**
 Given an array consists of non-negative integers, your task is to count the number of triplets 
 chosen from the array that can make triangles if we take them as side lengths of a triangle.
 */

//rule of triangles: sum of two sides is greater than third
//given sides a, b, c =>
//a+b > c  &&  b+c > a  &&  a+c > b

//if a,b,c is sorted (ascending) we can shorten this to just a + b > c
//knowing this, we can limit our search to finding triplets with a sliding window on a sorted array

// we can start by finding PAIRS, the greatest of the pair is the start of our window
// the end of our window as the MAX num that is still less than the sum of the two pairs
// because our array is sorted, everything inside of our window is a valid answer 


var triangleNumber = function(nums) {
    
    nums.sort((a,b) => a-b)  //only works with a sorted array
    
    while (nums[0] === 0) nums.shift()  //remove zero lengths, as they are invalid
    
    if (nums.length < 3) return 0  //edge case: not enough to form any triangles
    if (nums.length === 3) {       //edge case: only one option
        if (nums[0] + nums[1] > nums[2]) return 1
        else return 0
    }
    
    let validCount = 0;
    
    for (let i=0; i<nums.length-2; i++) {  //first element and left bound of sliding window
        let k = i + 2                      // third element and the right bound of the sliding window
        for (let j=i+1; j<nums.length; j++) {  //second element
            while (k < nums.length && nums[i] + nums[j] > nums[k]) { //these are the highest k can go
                k++
            }
            //once k is as far as it can go, we can measure the range of our window
            let range = k-j-1
            //add this range to count
            validCount += range
        }
    }
    return validCount
};

//https://leetcode.com/problems/valid-triangle-number/