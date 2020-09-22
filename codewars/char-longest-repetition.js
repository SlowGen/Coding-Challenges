// find the longest substring of repeated characters and return an array with the character that was repeated and the length of repetition

/*
example:
INPUT: s = 'aaaabb'
OUTPUT: ['a', 4]
*/

function longestRepetition(s) {
  let runChar = ''
  let runLength = 0
  let longestLength = 0
  if (s.length > 0) runLength = 1
  for (let i=0; i<s.length; i++) {
    if (s[i] === s[i+1]) {
      runLength += 1
    } else {
      if (runLength > longestLength) {
        longestLength = runLength
        runChar = s[i]
      }
      runLength = 1
    }
  }
  return [runChar, longestLength];
}
