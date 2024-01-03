const isPalindrome = require('../functions/isPalindrome')

test('Tacocat returns true', () => {
  expect(isPalindrome('TACOCAT')).toBe(true)
})

test('Tacocat returns false', () => {
  expect(isPalindrome('coffee')).toBe(false)
})