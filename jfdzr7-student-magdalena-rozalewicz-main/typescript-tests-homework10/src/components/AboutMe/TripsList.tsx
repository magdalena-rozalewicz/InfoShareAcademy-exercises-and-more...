import { StyledTripsList, StyledTripsListItem } from "./StyledTripsList";

type Tripp = {
    trips: Trip[]
};

type Trip = {
    id: number,
    start: string,
    finish: string,
    dystans: number
};

export const TripsList: React.FC<Tripp> = ({ trips }) => {
    return (
        <>
            {
                trips.map((trip) =>
                    <StyledTripsList>
                        <StyledTripsListItem>{trip.start}-{trip.finish}</StyledTripsListItem>
                        <StyledTripsListItem>{trip.dystans}km</StyledTripsListItem>
                    </StyledTripsList>
                )
            }

        </>
    )
};
