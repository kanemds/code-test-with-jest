import { render, screen } from '@testing-library/react'
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