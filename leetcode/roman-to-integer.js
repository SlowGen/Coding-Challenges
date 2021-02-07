var romanToInt = function(s) {
    let amount = 0
    const sArray = s.split('')
    let last;
    let current;
    function doMinus (last, current) {
        if (current === 'I' && last === 'V') return -1 * 2
        if (current === 'I' && last === 'X') return -1 * 2
        if (current === 'X' && last === 'L') return -10 * 2
        if (current === 'X' && last === 'C') return -10 * 2
        if (current === 'C' && last === 'D') return -100 * 2
        if (current === 'C' && last === 'M') return -100 * 2
        return 0
    }
    
    
    while (sArray.length) {
        current = sArray.pop()
        switch (current) {
            case 'I':
                amount += 1
                break
            case 'V':
                amount += 5
                break;
            case 'X':
                amount += 10
                break;
            case 'L':
                amount += 50
                break;
            case 'C':
                amount += 100
                break;
            case 'D':
                amount += 500
                break;
            case 'M':
                amount += 1000
                break;
            default:
                amount += 0
        }
        let minus = doMinus(last, current)
        amount += minus
        last = current
    }
    return amount
};