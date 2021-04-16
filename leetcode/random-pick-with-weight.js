/**
 
 */
 var Solution = function(w) {
    this.size = w.length
    this.range = w.reduce((a,b) => a+b)
    this.weighted = new Map()

    let runningBottom = 0
    for (let i=0; i<w.length; i++) {
        this.weighted.set(i, runningBottom)
        runningBottom += w[i]
    }
};

// using a linear search
// Solution.prototype.pickIndex = function() {
//     const random = Math.floor(Math.random() * this.range)
//     let last = 0
//     while (last < this.size) {
//         const floor = this.weighted.get(last)
//         const ceiling = this.weighted.get(last+1) || Infinity
//         if (random >= floor && random < ceiling) return last
//         last++
//     }
//     return last
// };

//using a faster, binary search
Solution.prototype.pickIndex = function() {
    const random = Math.floor(Math.random() * this.range)
    let low = 0
    let high = this.size
    
    while (low < high) {
        let middle = Math.floor((high-low) / 2) + low
        const floor = this.weighted.get(middle)
        const ceiling = this.weighted.get(middle+1) || Infinity
        if (random >= floor && random < ceiling) return middle
        if (random > floor) low = middle
        else high = middle
    }
    return low
};

//https://leetcode.com/problems/random-pick-with-weight/