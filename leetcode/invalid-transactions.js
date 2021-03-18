/**
 An invalid transaction is > $1000, or takes place in different cities within (and including) 60 minutes
 Return list of invalids in any order
 */
 var invalidTransactions = function(transactions) {
    
    const txByName = new Map();
    const invalids = [];
    
    
    //iterate through transactions, reformatting data as we go, then assigning to map
    for (let tx of transactions) {
        let isValid = true;
        const separated = tx.split(',');
        const name = separated[0];
        const time = Number.parseInt(separated[1], 10);
        const amount = Number.parseInt(separated[2], 10);
        const city = separated[3];
        
    //check amount
        if (amount > 1000) isValid = false;
        
    //add data to map, checking for time faults
        if (txByName.has(name)) {
            const data = txByName.get(name)
            for (const action of data) {
                let span = Math.abs(action[0] - time)
                if (action[2] !== city && span <= 60) {
                    isValid = false;
                    action[3] = false;
                }
            }
            data.push([time, amount, city, isValid])
            txByName.set(name, data)
        } else {
            const data = [[time, amount, city, isValid]]
            txByName.set(name, data)
        }
    }

    //iterate through map, push invalid transactions to final list
    function addInvalids(data, name, map) {
        for (const tx of data) {
            tx[3] ? null : invalids.push(`${name},${tx[0]},${tx[1]},${tx[2]}`)
        }
    }
    txByName.forEach(addInvalids)
    
    return invalids;
};

// https://leetcode.com/problems/invalid-transactions/