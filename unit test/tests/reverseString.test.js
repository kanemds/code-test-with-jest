const reverseString = require('../functions/reverseString')

test('Reverse any given string', () => {
  expect(reverseString('a b C')).toBe('C b a')
})