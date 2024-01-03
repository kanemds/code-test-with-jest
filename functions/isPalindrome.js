const isPalindrome = (word) => {
  return word.toLowerCase() === word.toLowerCase().split('').reverse().join('').replaceAll(',', '')
}

module.exports = isPalindrome