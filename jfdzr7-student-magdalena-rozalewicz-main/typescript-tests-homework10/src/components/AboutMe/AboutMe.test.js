import { render, screen } from '@testing-library/react';
import { AboutMe } from "./AboutMe";
import { trips } from "../../helper/trips.data";


test("renders header 'O Mnie'", () => {
    render(<AboutMe trips={trips} />);
    const headerElement = screen.getByRole("heading");
    expect(headerElement).toBeInTheDocument();
});

