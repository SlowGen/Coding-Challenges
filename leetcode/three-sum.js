/* Given an array of numbers, find sets of three numbers that add up to zero.
Each entry can only be used once in each solution and each solution must be unique.
Return an array comprised of an array of each valid solution
*/


//this solution *works* but exceeds time considerations, it is also not very space friendly.
//will update with a refined solution when I have one
var threeSum = function(nums) {
  const solutionSet = []
  const used = []
  let solution = []
  nums = nums.sort((a, b) => a - b)
  for (let i=0; i<nums.length; i++) {
    for (let j=i+1; j<nums.length-1; j++) {
      let needed = (nums[i] + nums[j]) * -1
      if ((nums.lastIndexOf(needed) > i) && (nums.lastIndexOf(needed) > j)) {
        if ((nums[i] !== solution[0]) || (nums[j] !== solution[1])) {
        solution = [nums[i], nums[j], needed]
        }
        if (!used.includes(solution.join('')))
        solutionSet.push(solution)
        used.push(solution.join(''))
      }
    }
  }
  return solutionSet
};

// https://leetcode.com/problems/3sum/
