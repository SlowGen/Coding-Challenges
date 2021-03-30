/**
 in string s, remove adjacent duplicates that number k
 */
 var removeDuplicates = function(s, k) {
    let madeChanges = true;
    
    while(madeChanges) {
        madeChanges = false;
        let updatedString = ''
        let index = 0;
        let dupes = s[0];
        while (index < s.length) {
            if (s[index] === s[index + 1]) {
                dupes += s[index + 1]
                index++
            } else {
                if (dupes.length < k) {
                    updatedString += dupes
                }
                else if (dupes.length > k) {
                    dupes = dupes.slice(0, -k)
                    updatedString += dupes
                    madeChanges = true
                }
                else if (dupes.length === k) {
                    madeChanges = true;
                }
                index++;
                dupes = s[index];
            }
        }
        s = updatedString;
    }
    return s
};

//shorter code, slightly longer runtime on leetcode,
//but same O(n)

function removeKduplicates(s, k) {
    let hasChanges = true;

    while (hasChanges) {
        hasChanges = false;
        let updatedString = '';
        let run = ''
        for (const letter of s) {
            if (run === '') run += letter
            else if (run[0] === letter) run += letter
            else {
                updatedString += run
                run = letter
            }
            if (run.length === k) {
                run = '';
                hasChanges = true;
            }
        }
        s = updatedString + run
    }
    return s
}



//https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/