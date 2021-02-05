// given an integer between 0-3999, convert to roman numerals

var intToRoman = function(num) {
    let roman = ''
    let numSplit = new Array (4)
    numSplit[0] = Math.floor(num / 1000)
    numSplit[1] = Math.floor(num / 100) - numSplit[0] * 10
    numSplit[2] = Math.floor(num / 10) - numSplit[0] * 100 - numSplit[1] * 10
    numSplit[3] = num % 10
    // first do M's, since num can't be > 3999, we don't need to address 4/9 issue
    while (numSplit[0] > 0) {
        roman = roman + 'M'
        numSplit[0]--
    }
    //then Ds and Cs (hundreds)
    if (numSplit[1] > 4) {
        if (numSplit[1] === 9) {
            roman += 'CM'
            numSplit[1] -= 9
        } else {
            roman += 'D'
            numSplit[1] -= 5
        }
    }
    if (numSplit[1] === 4) {
        roman += 'CD'
        numSplit[1] -= 4
    }
    while (numSplit[1] > 0) {
        roman += 'C'
        numSplit[1] -= 1
    }
    // Ls and Xs (tens)
    if (numSplit[2] > 4) {
        if (numSplit[2] === 9) {
            roman += 'XC'
            numSplit[2] -= 9
        } else {
            roman += 'L'
            numSplit[2] -= 5
        }
    }
    if (numSplit[2] === 4) {
        roman += 'XL'
        numSplit[2] -= 4
    }
    while (numSplit[2] > 0) {
        roman += 'X'
        numSplit[2] -= 1
    }
    // Vs and Is (ones)
    if (numSplit[3] > 4) {
        if (numSplit[3] === 9) {
            roman += 'IX'
            numSplit[3] -= 9
        } else {
            roman += 'V'
            numSplit[3] -= 5
        }
    }
    if (numSplit[3] === 4) {
        roman += 'IV'
        numSplit[3] -= 4
    }
    while (numSplit[3] > 0) {
        roman += 'I'
        numSplit[3] -= 1
    }
    
    return roman
};