/**
 * Find the first pair where the sum is 0
 * @param {*} arr A sorted arr
 * @returns undfined or the pair that sums 0
 */
function sumZero(arr) {
  if (arr.length <= 2) return undefined

  let left = 0
  let right = arr.length - 1

  while (left < right) {
    const sum = arr[left] + arr[right]
    if (sum === 0) return [arr[left], arr[right]]

    if (sum < 0) {
      left++
    } else {
      right--
    }
  }
  return undefined
}

const res = sumZero([-3, -2, -1, 0, 1, 2, 3])

console.log(res)