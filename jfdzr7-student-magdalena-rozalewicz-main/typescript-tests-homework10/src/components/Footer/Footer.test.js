import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

test("renders footer's pharagraph", () => {
    render(<Footer />);
    expect(screen.getByTestId("p1-element")).toBeInTheDocument();
});