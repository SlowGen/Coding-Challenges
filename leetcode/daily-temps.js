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

var dailyTemperatures = function(T) {
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

//https://leetcode.com/problems/daily-temperatures/