/**
 You are given a list of preferences for n friends, where n is always even.

For each person i, preferences[i] contains a list of friends sorted in the order of preference. 
In other words, a friend earlier in the list is more preferred than a friend later in the list. 
Friends in each list are denoted by integers from 0 to n-1.

All the friends are divided into pairs. The pairings are given in a list pairs, 
where pairs[i] = [xi, yi] denotes xi is paired with yi and yi is paired with xi.

However, this pairing may cause some of the friends to be unhappy. 
A friend x is unhappy if x is paired with y and there exists a friend u who is paired with v but:

x prefers u over y, and
u prefers x over v.
Return the number of unhappy friends.

***this is the given prompt, but it SUCKS. The hardest part of this was trying to figure out exactly what the
***"happy" vs "unhappy" requirements were. I finally figured out that there are two parts to being happy:
*** 1. selfish happy => this means that you got your first choice, so you don't care about anyone else's feelings
        this person is counted as "happy"
*** 2. martyr happy / mutual choice => this means that I didn't get my first choice, but I'm only unhappy if my 
        first choice also did not get their first choice AND one of their BETTER choices was me 
        (regardless if I was first or not, I just can't be a worse choice than the one they got) 
        So, if I got my worst possible choice, but all of my other choices are happy, 
        then I'm happy for them and happy too. Ok, whatever.
 */


 var unhappyFriends = function(n, preferences, pairs) {
    
    //map of better options, compare pairs to prefs. key = friend value = set() better options
    //iterate through each entry in map, evaluate each entry's set
    //each set entry..check if THEIR set includes the friend (this means mutual preference)
    
    const betterOpts = new Map();
    
    for (const pair of pairs) {
        betterOpts.set(pair[0], new Set())     //these map all friends with an open empty set
        betterOpts.set(pair[1], new Set())
        
        const pair0pref = preferences[pair[0]]
        const pair1pref = preferences[pair[1]]
        
        //do pair0
        for (const pref of pair0pref) {
            if (pref === pair[1]) break;   //if I got my first choice, no need to add any better opts to set
            betterOpts.get(pair[0]).add(pref)  //adds any better opts to the set
        }
        //do pair[1]
        for (const pref of pair1pref) {    //same as above, for the second partner
            if (pref === pair[0]) break;
            betterOpts.get(pair[1]).add(pref)
        }
    }
    
    let results = 0;
    
    for (let [friend, betters] of betterOpts) {
        if (betters.size > 0) {  //if better.size === 0, this is the 'selfish-happy'
            let isHappy = true;    //need to do a happy toggle to prevent double counts
            for (const better of betters) {
                if (betterOpts.get(better).has(friend)) {  //this is where the mutual choice comes in
                    isHappy = false;
                }
            }
            !isHappy ? results++ : null;
        }
    }
    
    return results
};

//https://leetcode.com/problems/count-unhappy-friends/