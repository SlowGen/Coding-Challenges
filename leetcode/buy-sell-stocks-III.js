/**
 * 
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
Find the maximum profit you can achieve. You may complete at most two transactions.
Note: You may not engage in multiple transactions simultaneously 
(i.e., you must sell the stock before you buy again).
 */


var maxProfit = function(prices) {
    let buy1 = Infinity     //these are set at the highest because we always want to buy lower
    let buy2 = Infinity
    
    let profit1 = 0      //start at 0 because the goal is to make a positive profit
    let profit2 = 0
    
    for (const price of prices) {
        if (price < buy1) buy1 = price     //this ensures that the lowest price is the first buy
        if (price - buy1 > profit1) profit1 = price - buy1  //if the profit here is more than any other profit
        if (price - profit1 < buy2) buy2 = price - profit1  //use profits to buy2 if it's less than prev option
        if (price - buy2 > profit2) profit2 = price - buy2  //max net profit of both buys
    }
    return profit2
};

//Essentially, as you are iterating through, you are calculating what would happen if you had sold 
//what you had and then used the profits to buy again.. This keeps you on the same buy as profits are 
//increasing. But as soon as they drop again (creating a secondary low buy price) this gives a profit
//that is used to buy the next round. In the end, the profit from the second buy includes the net gains 
//from the first sell, so the return is the total max profit from the second buy.


//https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/