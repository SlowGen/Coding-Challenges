/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a 
different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/


//keep vars for low and high and maxProfit
//iterate through, if num is lower than the low, you MUST overwrite both the low and the high
//because you can't go back in time to sell high
//if the num is higher than the high, then you can overwrite
//at each iteration, calculate profit from high - low and record if there is something 
//higher than last calculation


var maxProfit = function(prices) {
    let mProfit = 0
    let low = Infinity
    let high = -Infinity
    
    for (const price of prices) {
        if (price < low) {
            low = price
            high = price
        }
        if (price > high) high = price
        if (high - low > mProfit) mProfit = high - low
    }
    return mProfit
};