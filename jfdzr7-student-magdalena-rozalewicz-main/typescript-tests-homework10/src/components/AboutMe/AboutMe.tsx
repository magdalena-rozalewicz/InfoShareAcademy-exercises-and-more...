import React from "react";
import { StyledHeader } from "../../styled/StyledHeader";
import { TripsList } from "./TripsList";

type Trip = {
    id: number,
    start: string,
    finish: string,
    dystans: number
};
type AboutProps = {
    title: string,
    content1: string,
    content2: string,
    trips: Trip[]
};

export const AboutMe: React.FC<AboutProps> = ({ title, content1, content2, trips }) => {
    return (
        <>
            <StyledHeader>{title}</StyledHeader>
            <p>{content1}</p>
            <TripsList trips={trips} />
            <p>{content2}</p>
        </>
    )
};