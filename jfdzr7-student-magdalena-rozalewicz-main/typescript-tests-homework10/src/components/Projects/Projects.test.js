import { render, screen } from '@testing-library/react';
import { Projects } from "./Projects";

test("renders heading in navy color", () => {
    render(<Projects />);
    const headerElement = screen.getByRole("heading", { level: 1 });
    expect(headerElement).toHaveStyle("color: navy");
});
