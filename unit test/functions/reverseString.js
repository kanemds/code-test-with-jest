
// split(''): Converts the string into an array of characters.
// example: 'Hello World'
// split('') each  ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
// split(' ') each   ['Hello', 'World']
// reverse(): Reverses the order of elements in the array.
// join(''): Joins the reversed array back into a string.

const reverseString = word => {
  return word.split('').reverse().join('').replaceAll(',', '')
}

module.exports = reverseString