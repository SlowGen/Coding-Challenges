// s to t is location of house
// a is location of apple tree
// b is location of orange tree
// apples & oranges are arrays of distances each fruit falls from its tree

//find number of each fruit to fall on the house, output should be two separate lines logging first number of apples and second, oranges


function countApplesAndOranges(s, t, a, b, apples, oranges) {

  let applesOnHouse = 0
  let orangesOnHouse = 0
  const fallenOnHouse = (fruit, tree) => {
      let fruitLocation = fruit + tree
      if ((fruitLocation >= s) && (fruitLocation <= t))
      return true
  }
  apples.forEach(apple => {
      if (fallenOnHouse(apple, a)) applesOnHouse += 1
  })
  oranges.forEach(orange => {
      if (fallenOnHouse(orange, b)) orangesOnHouse += 1
  })
    console.log(applesOnHouse)
    console.log(orangesOnHouse)
}

let s = 7
let t = 11
let a = 5
let b = 15
let apples = [-2, 2, 1]
let oranges = [5, -6]

countApplesAndOranges(s,t,a,b, apples, oranges)


// https://www.hackerrank.com/challenges/apple-and-orange/problem

