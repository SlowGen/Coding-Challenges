/**
 Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], 
 return the minimum number of conference rooms required.
 */
 
 var minMeetingRooms = function(intervals) {
    //separate ins and outs, then sort
    //iterate through ins, if the in >= the current out continue
    //if in < out, add a meeting room
    let rooms = 0;
    
    let ins = []
    let outs = [];
    
    for (const interval of intervals) {
        ins.push(interval[0])
        outs.push(interval[1])
    }
    
    ins.sort((a,b) => a-b)
    outs.sort((a,b) => a-b)
    
    let outPoint = 0
    
    for (let start of ins) {
        if (start < outs[outPoint]) rooms++
        else outPoint++
    }
    return rooms
};

//https://leetcode.com/problems/meeting-rooms-ii/