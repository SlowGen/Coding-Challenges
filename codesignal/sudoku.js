/*
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.

**note from me: 'empty' squares are represented by '.' in the grid
*/


function sudoku2(grid) {
  let results = true

  // helper function to determine if a given array is valid
  const noDuplicates = arr => {
      const entries = new Map()
      arr.forEach(entry => {
          if ((entries.has(entry) && entry !== '.')) {
              console.log('entry in helper', entry)
              results = false
          } else entries.set(entry)
      })
  }
//test rows first
  grid.forEach(row => noDuplicates(row))

//then columns
  for (let i=0; i<9; i++) {
      let column = []
      grid.forEach(row => {
          column.push(row[i])
      })
      noDuplicates(column)
  }

//then subgrids
  for (let i=0; i<9; i+=3) {   //every three rows
      for (let j=0; j<9; j+=3) {   //by every three columns
          let threeXthree = []
          for (let k=i; k<i+3; k++) {  //inside each subgrid, populate threeXthree
              for (let l=j; l<j+3; l++) {
                  threeXthree.push(grid[k][l])
              }
          }
          noDuplicates(threeXthree)
      }
  }
  return results
}
