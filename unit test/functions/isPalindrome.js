const reverseString = require('./reverseString')

const abc = () => {
  return 'testing for jest --coverage'
}

const isPalindrome = (word) => {
  return word.toLowerCase() === reverseString(word).toLowerCase()
}

module.exports = isPalindrome