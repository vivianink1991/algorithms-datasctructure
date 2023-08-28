function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false

  const lookup = {}
  for (let char of str1) {
    lookup[char] = (lookup[char] || 0) + 1
  }

  for (let char of str2) {
    // 0 or undefined
    if (!lookup[char]) return false

    lookup[char] -= 1
  }

  return true
}

const res = validAnagrams('rat', 'car')
console.log(res)
