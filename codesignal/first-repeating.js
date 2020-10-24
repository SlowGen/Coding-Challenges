// given a string of small English letters, find the first instance of a non-repeating character

// return repeating character or '_' if there is none

function firstNotRepeatingCharacter(s) {
  const resultMap = new Map()
  const sArr = s.split('')
  const results = []
  sArr.forEach(char => {
      if (resultMap.has(char)) {
          resultMap.set(char, false)
      } else resultMap.set(char, true)
  })
  resultMap.forEach((value, key) => {
    if (value === true) results.push(key)
  })
  if (results.length < 1) return '_'
  else return results[0]
}

