import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Nav } from './Nav';

test('renders heading Traveler', () => {
    render(
        <BrowserRouter>
            <Nav />
        </BrowserRouter>
    );
    const navHeaderElement = screen.getByRole("heading");
    expect(navHeaderElement).toBeInTheDocument();
});
