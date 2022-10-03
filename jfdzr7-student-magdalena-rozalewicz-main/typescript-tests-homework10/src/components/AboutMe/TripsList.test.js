import { render, screen } from "@testing-library/react";
import { TripsList } from "./TripsList";
import { trips } from "../../helper/trips.data";

test("renders trip's name 'Lizbona-Kair'", () => {
    render(<TripsList trips={trips} />);
    const listElement = screen.getByText("Lizbona-Kair");
    expect(listElement).toBeInTheDocument();
});
