/**
 * 
 * @param {*} arr1 
 * @param {*} arr2 The second array is the square of the first array
 */
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  // const frequencyCounter1 = {}
  // for(let val of arr1) {
  //   frequencyCounter1[val] = (frequencyCounter1[val] || 0)+ 1
  // }

  const frequencyCounter2 = {}
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  // for (let key in frequencyCounter1) {
  //   if (!(key ** 2 in frequencyCounter2)) {
  //     return false
  //   }

  //   if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
  //     return false
  //   }
  // }

  for (let val of arr1) {
    if (!frequencyCounter2[val ** 2]) return false

    frequencyCounter2[val ** 2] -= 1
  }

  return true
}

const isSame = same([1, 5, 3], [1, 25, 9])
console.log(isSame)