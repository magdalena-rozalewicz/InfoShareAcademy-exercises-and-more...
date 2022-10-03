import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';


test('renders heading in navy color', () => {
    render(<HomePage />);
    const headerElement = screen.getByRole("heading");
    expect(headerElement).toHaveStyle("color: navy");
});