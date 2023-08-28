/**
 * 
 * @param {*} arr A sorted arr
 * return: the appearence times of elements, each element with the same value only counts one time.
 */
function countUniqueValues(arr) {
  if (!arr.length) return 0

  // let start = 0
  // let end = 1
  // let counter = 1

  // while(end <= arr.length - 1) {
  //   if (arr[start] !== arr[end]) {
  //     counter++
  //     start = end
  //   }
  //   end++
  // }

  // return counter
  
  // or use the original arr as the container of unique values
  // i indicates the counter, arr[i] indicates the latest compared unique value

  let i = 0
  let j = 1

  while(j <= arr.length - 1) {
    if (arr[i] !== arr[j]) {
      arr[++i] = arr[j]
    }
    j++
  }

  return i + 1
}

const res = countUniqueValues([1, 2, 2, 3, 4, 4, 5, 6, 7, 7])
console.log(res)
