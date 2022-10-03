import { render, screen } from '@testing-library/react';
import App from './App';

test('renders logo Traveler', () => {
  render(<App />);
  const logoElement = screen.getByText("Traveler");
  expect(logoElement).toBeInTheDocument();
});
