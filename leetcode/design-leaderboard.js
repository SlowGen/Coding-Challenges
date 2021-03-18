
/*
Design a Leaderboard class, which has 3 functions:

**addScore(playerId, score): Update the leaderboard by adding score to the given player's score. 
    If there is no player with such id in the leaderboard, add him to the leaderboard with the given score.
**top(K): Return the score sum of the top K players.
**reset(playerId): Reset the score of the player with the given id to 0 
    (in other words erase it from the leaderboard). It is guaranteed that the player was added to the leaderboard before calling this function.
Initially, the leaderboard is empty.
*/

var Leaderboard = function() {
    //create map id => totalScore
    this.scores = new Map();
};

Leaderboard.prototype.addScore = function(playerId, score) {
    if (this.scores.has(playerId)) {
        const oldScore = this.scores.get(playerId);
        this.scores.set(playerId, oldScore + score);
    } else this.scores.set(playerId, score)
};

Leaderboard.prototype.top = function(K) {
    //returns TOTAL of top scores
    const allScores = []
    for (let value of this.scores.values()) allScores.push(value)
    allScores.sort((a,b) => a-b);
    return allScores.slice(allScores.length - K).reduce((a,b) => a+b)
};

Leaderboard.prototype.reset = function(playerId) {
    this.scores.delete(playerId)
};

//https://leetcode.com/problems/design-a-leaderboard/