/*
Implement a MyCalendarTwo class to store your events. A new event can be added if adding the event will 
not cause a triple booking.

Your class will have one method, book(int start, int end). 
Formally, this represents a booking on the half open interval [start, end), the range of real 
numbers x such that start <= x < end.

A triple booking happens when three events have some non-empty intersection (ie., there is some 
time that is common to all 3 events.)

For each call to the method MyCalendar.book, return true if the event can be added to the calendar
successfully without causing a triple booking. Otherwise, return false and do not add the event to the calendar.

Your class will be called like this: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)
*/

var MyCalendarTwo = function() {
    this.starts = []
    this.ends = []
};


 //keep track of all start times and end times in own arrays
//create temporary arrays that include the new possible times
//sort and then iterate counting needed slots by evaluating whether meetings have
//ended when the next has begun (which is when a new slot would be needed)
//if needed slots is greated than 2, return false
//otherwise, add the times to arrays and return true


MyCalendarTwo.prototype.book = function(start, end) {
    if (!this.starts.length && !this.ends.length) {
        this.starts.push(start)
        this.ends.push(end)
        return true
    }
    let bookings = 0
    let endPoint = 0
    
    const allStarts = [...this.starts, start].sort((a,b) => a-b)
    const allEnds = [...this.ends, end].sort((a,b) => a-b)
    
    for (let appt of allStarts) {
        if (appt < allEnds[endPoint]) bookings++
        else {
            endPoint++
        }
    }
    if (bookings < 3) {
        this.starts.push(start)
        this.ends.push(end)
    }
    return bookings < 3
};

//https://leetcode.com/problems/my-calendar-ii/