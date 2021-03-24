/**
 Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
 and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */

 var merge = function(intervals) {
    //sort by start time
    //iterate through expanding the current inerval as needed OR
    //start a new interval when there is a gap

    const merged = [];
    
    intervals.sort((a,b) => a[0]-b[0])
    
    let currInt = [];
    
    for (let int of intervals) {
        if (!currInt.length) {
            currInt.push(int[0])
            currInt.push(int[1])
        } 
        if (int[0] <= currInt[1]) {
            int[0] <= currInt[0] ? currInt[0] = int[0] : null;
            int[1] >= currInt[1] ? currInt[1] = int[1] : null;
        } else {
            merged.push(currInt);
            currInt = [int[0], int[1]]
        }
    }
    merged.push(currInt)
    return merged
};

//https://leetcode.com/problems/merge-intervals/