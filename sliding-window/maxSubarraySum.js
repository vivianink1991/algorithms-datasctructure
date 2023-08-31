/**
 * 
 * @param {*} arr 
 * @param {*} n 
 */
function maxSubarraySum(arr, n) {
  if (arr.length < n) return null

  let maxSum = 0

  for (let i = 0; i < n; i++) {
    maxSum += arr[i]
  }

  // forward
  // for (let i = 0; i < arr.length - n; i++) {
  //   const newSum = maxSum - arr[i] + arr[i + n]
  //   if (newSum > maxSum) {
  //     maxSum = newSum
  //   }
  // }

  // backward
  for (let i = n; i < arr.length; i++) {
    const newSum = maxSum - arr[i - n] + arr[i]
    maxSum = Math.max(maxSum, newSum)
  }

  return maxSum

}

const res = maxSubarraySum([1, 2, 6 ,8, 5, 6, 7], 3)
console.log(res)

