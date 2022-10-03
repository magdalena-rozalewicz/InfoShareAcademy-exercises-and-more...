import React from "react";
import { StyledFooter } from "./StyledFooter";

type FooterProps = {
    descr1: string,
    descr2: string
};

export const Footer: React.FC<FooterProps> = ({ descr1, descr2 }) => {
    return (
        <StyledFooter>
            <p data-testid="p1-element">{descr1} </p>
            <p>{descr2} </p>
        </StyledFooter>
    )
};


