// given an array of words and a value k, return an array of the most frequently appearing words in descending order of frequency, ascending order alphabetically (if tied for freq) - limit k words in the array


var topKFrequent = function(words, k) {
  const wordArray = [];
  const returnArray = [];
  const memo = {};
  words.sort().forEach(word => {
      if (memo[word]) memo[word] += 1
      else {
        memo[word] = 1
        wordArray.push(word)
      }
  })
  let valuesArray = Object.values(memo)
  for (let i=0; i<k; i++) {
    let mostIndex = valuesArray.indexOf(Math.max(...valuesArray))
    returnArray.push(wordArray[mostIndex])
    valuesArray[mostIndex] = -1
  }
  return returnArray
};

// https://leetcode.com/problems/top-k-frequent-words/
