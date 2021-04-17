/*
You are given two strings s1 and s2 of equal length consisting of letters "x" and "y" only. 
Your task is to make these two strings equal to each other. You can swap any two characters that 
belong to different strings, which means: swap s1[i] and s2[j].

Return the minimum number of swaps required to make s1 and s2 equal, or return -1 if it is impossible to do so.
*/

//make map of counted mismatches at each index keys = 'xy' 'yx' val=count
//for each... take count divided by 2(floor) for each add each to final count
//for each... take mod 2, if results equal each other, add each to final count
//return final count

function minimumSwap(s1, s2) {
    let xy = 0
    let yx = 0

    for (let i=0; i<s1.length; i++) {
        if (s1[i] === 'x' && s2[i] === 'y') xy++
        if (s1[i] === 'y' && s2[i] === 'x') yx++
    }
    
    if (xy % 2 !== yx % 2) return -1

    let swaps = 0;
    swaps += Math.floor(xy / 2)
    swaps += Math.floor(yx / 2)
    if (xy % 2 === 1) swaps += 2

    return swaps
}

//https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/