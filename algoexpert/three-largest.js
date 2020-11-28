function findThreeLargestNumbers(array) {
    let small = -Infinity
      let medium = -Infinity
      let large = -Infinity
      array.forEach(num => {
          const isSmall = (num <= medium) && (num > small)
          const isMedium = (num > medium) && (num <= large)
          const isLarge = (num >= large)
          if (isLarge) {
              small = medium;
              medium = large;
              large = num;
          } else if (isMedium) {
              small = medium
              medium = num
          } else if (isSmall) {
              small = num
          }
      })
      return [small, medium, large]
  }