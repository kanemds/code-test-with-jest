const shallowObjClone = require('../functions/shallowObjClone')

test('Create a clone of the object parameter', () => {
  const myObj = { person: 'Hiker', number: 42 }
  expect(shallowObjClone(myObj)).toStrictEqual(myObj)
}) 