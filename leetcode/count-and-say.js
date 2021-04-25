/**
 Count and Say - I can put the prompt, but I won't. It's such a bad description. As someone else more
 accurately described it, this is essentially a compression algo.
 */
 var countAndSay = function(n) {
    const prevSequence = [1, 'placeholder']  //1 is the basecase, placeholder is needed to start past basecase
    const finalSequence = nextSequence(n, prevSequence)
    let string = ''
    
    for (const digit of finalSequence) {
        string += digit
    }
    return string
};

function nextSequence(n, previous) {
    if (n <= 1) {
        previous.pop()   //if n <=1, that is the basecase, so we get rid of the placeholder
        return previous
    }
     const next = []   //next sequence to run through

     let prev = null  
     let count = 0
     for (const digit of previous) {   //iterate through previous looking for runs of duplicates
         if (prev === null) {                   
             prev = digit
             count++                //count the runs
         } else if (prev === digit) {
             count++
         } else {
             next.push(count)           //when a dupe run has ended, push current count
             next.push(prev)            //and current run digit
             prev = digit                   //start again with next run
             count = 1
         }
     }
    next.push('placeholder')  //put back the placeholder
    return nextSequence(n-1, next)   //keep going until we hit the basecase
}

//https://leetcode.com/problems/count-and-say/