/**
 Design a stack that supports push, pop, top, and retrieving the minimum element in ***constant time.***

Implement the MinStack class:

MinStack() initializes the stack object.
void push(val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
 */

//note the requirement for 'CONSTANT TIME'
//This works at O(n) time because prior minimums are tracked with each entry. Therefore,
//there is no need to sort or iterate to look for a new min if old min is removed


 var MinStack = function() {
    this.stack = []
    this.min = Infinity
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push([val, this.min])   //this keeps track of what is/was the minimum at the time this was added
    if (val < this.min) this.min = val
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let popped = this.stack.pop()
    if (this.min === popped[0]) {     //if the current min is removed,
        this.min = popped[1]          //reset the min to the most recent min prior to the popped val
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min
};

//https://leetcode.com/problems/min-stack/