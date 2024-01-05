// jest.mock('') it will run all the .test.js document instead, for specific Component, do test within 


// global simulate api must be on root folder

// src/
// |-- __mocks__/
// |   |-- axios.js
// |-- components/
// |   |-- MyComponent.js
// |-- __tests__/
// |   |-- MyComponent.test.js

// __mocks__/axios.js
const axios = jest.createMockFromModule('axios')

axios.get = jest.fn(() => Promise.resolve({ data: { id: 1, name: 'John' } }))

export default axios

// This setup mocks the axios module globally for all tests.
// Any module that imports axios will get this mocked version. 
// This is useful for situations where you want to control the behavior of axios throughout your entire test suite.
// Jest will automatically look for a __mocks__ directory and use the mocks defined there.
// This is a convenient way to globally mock dependencies.