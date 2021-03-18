/**
A company is planning to interview 2n people. Given the array costs where 
costs[i] = [aCosti, bCosti], 
the cost of flying the ith person to city a is aCosti, 
and the cost of flying the ith person to city b is bCosti.

Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

 */
 var twoCitySchedCost = function(costs) {
    //sorted by size of difference (smallest to largest)
    costs.sort((a,b) => (Math.abs(a[0]-a[1])-Math.abs(b[0]-b[1])))
    
    let total = 0;
    
    const n = costs.length
    let cityA = 0;
    let cityB = 0;
    
    //iterate backwards to get BIGGEST differences first, select smaller amount of pair
    //count persons for each city and assign remainders when any city is full
    for (let i=n-1; i>=0; i--) {
        if (cityA === n / 2 || cityB === n / 2) {
            cityA === n / 2 ? total += costs[i][1] : total += costs[i][0]
        } else {
            if (costs[i][0] > costs[i][1]) {
                total += costs[i][1];
                cityB++
            } else {
                total += costs[i][0];
                cityA++
            }
        }
    }
    return total
};

//https://leetcode.com/problems/two-city-scheduling/