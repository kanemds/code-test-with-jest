import App from './App'
import { render, screen } from '@testing-library/react'

test('renders 3 list items', () => {
  render(<App />)
  const listElement = screen.getAllByRole('listitem')
  expect(listElement).toHaveLength(3)
})