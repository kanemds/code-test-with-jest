import { fireEvent, render, screen } from '@testing-library/react'
import Login from './Login'

test('username input should be render', () => {
  render(<Login />)
  const usernameEl = screen.getByPlaceholderText(/username/i)
  expect(usernameEl).toBeInTheDocument()
})

test('username input should be render', () => {
  render(<Login />)
  const passwordEl = screen.getByPlaceholderText(/password/i)
  expect(passwordEl).toBeInTheDocument()
})

test('username input should be render', () => {
  render(<Login />)
  const buttonEl = screen.getByRole("button")
  expect(buttonEl).toBeInTheDocument()
})


test('username input value should be empty when refresh', () => {
  render(<Login />)
  const usernameEl = screen.getByPlaceholderText(/username/i)
  expect(usernameEl.value).toBe('')
})

test('password input value should be empty when refresh', () => {
  render(<Login />)
  const passwordEl = screen.getByPlaceholderText(/password/i)
  expect(passwordEl.value).toBe('')
})

test('button should be disable ', () => {
  render(<Login />)
  const buttonEl = screen.getByRole("button")
  expect(buttonEl).toBeDisabled()
})

test('check error message', () => {
  render(<Login />)
  const errorEl = screen.getByTestId("error")
  expect(errorEl).not.toBeVisible()
})

test('username input should change', () => {
  render(<Login />)
  const usernameEl = screen.getByPlaceholderText(/username/i)
  const testValue = 'test'
  fireEvent.change(usernameEl, { target: { value: testValue } })
  expect(usernameEl.value).toBe(testValue)
})

test('password input should change', () => {
  render(<Login />)
  const passwordEl = screen.getByPlaceholderText(/password/i)
  const testValue = 'test'
  fireEvent.change(passwordEl, { target: { value: testValue } })
  console.log(passwordEl)
  expect(passwordEl.value).toBe(testValue)
})


test('button enable when both username and password inputs exist ', () => {
  render(<Login />)
  const buttonEl = screen.getByRole("button")
  const usernameEl = screen.getByPlaceholderText(/username/i)
  const passwordEl = screen.getByPlaceholderText(/password/i)

  const testValue = 'test'

  fireEvent.change(usernameEl, { target: { value: testValue } })
  fireEvent.change(passwordEl, { target: { value: testValue } })
  expect(buttonEl).not.toBeDisabled()
})