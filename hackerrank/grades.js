/* hackerrank's problem solving challenges.
given an array of grades
edit grades by following rules:
fail < 40, however grades should be rounded up if you are less than 3 points away from the next %5
if grade rounding doesn't negate a fail, the grade stays the same. If the grade is below the rounding threshold, it stays the same
max grade is 100
return modified grades as an array
*/


function gradingStudents(grades) {
  const newGrades = []
  grades.forEach(grade => {
    if ((grade % 5 > 2) && (grade >= 38)) grade += 5 - (grade % 5)
    if (grade > 100) grade = 100
    newGrades.push(grade)
  })
  return newGrades
}


// https://www.hackerrank.com/challenges/grading/problem
