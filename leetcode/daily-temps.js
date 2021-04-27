/**
Given a list of daily temperatures T, return a list such that, for each day in the input, 
tells you how many days you would have to wait until a warmer temperature. 
If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], 
your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. 
Each temperature will be an integer in the range [30, 100].
 */

//iterate through each day
//pointer for forecast
//increment pointer until end or warmer day
//reset pointer to i+1 for each iteration
//results pointer - i or 0 (if end is reached and no answer)

var dailyTemperaturesITERATION = function(T) {
    const results = []
    
    for (let i=0; i<T.length; i++) {
        let forecast = i + 1
        let answer = 0
        while (forecast < T.length) {
            if (T[forecast] > T[i]) {
                answer = forecast - i
                break;
            }
            else forecast++
        }
        results.push(answer)
    }
    return results
};

//Map approach is very similar to stack approach, but less efficient

function dailyTemperaturesMAP(T) {
    const results = new Array(T.length)

    const rise = new Map()
    for (let i=0; i<T.length -1; i++) {
        if (T[i+1] > T[i]) rise.set(i+1, T[i+1])
    }
    rise.set(T.length, Infinity)

    for (let i=0; i<T.length; i++) {
        let nextRise = rise.keys().next().value //index
        if (nextRise === T.length) results[i] = 0
        else {
            if (nextRise === i) {
                rise.delete(nextRise)
                nextRise = rise.keys().next().value //index
            }
            for (const increases of rise) {
                if (increases[1] > T[i]) {
                    results[i] = increases[1] < Infinity ? increases[0] - i : 0
                    break;
                }
            }
            
        }
    }
    return results
}


/**
 * stack approach, same exact idea as map approach, but goes backwards..which is the key to speed for this
 * particular problem
 */

function dailyTemperaturesSTACK(T) {
    const results = new Array(T.length)

    const stack = []
    for (let i=T.length -1; i>=0; i--) {
        while (stack.length && T[i] >= T[stack[stack.length-1]]) stack.pop()
        results[i] = !stack.length ? 0 : stack[stack.length-1] - i
        stack.push(i)
    }
    return results
}

//https://leetcode.com/problems/daily-temperatures/