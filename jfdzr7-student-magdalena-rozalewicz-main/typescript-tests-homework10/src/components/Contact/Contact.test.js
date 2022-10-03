import { render, screen } from '@testing-library/react';
import { Contact } from './Contact';

test('renders map - image element', () => {
  render(<Contact />);
  const imageElement = screen.getByRole("img");
  expect(imageElement).toBeInTheDocument();
});