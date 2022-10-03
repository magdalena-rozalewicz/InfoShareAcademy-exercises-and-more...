import { StyledHeaderTraveler, StyledNavLink, StyledListItem } from "./StyledNav";

type NavProps = {
    title: string,
    home: string,
    contact: string,
    projects: string,
    about: string
};

export const Nav: React.FC<NavProps> = ({ title, home, contact, projects, about }): JSX.Element => {
    return (
        <>
            <StyledHeaderTraveler>{title}</StyledHeaderTraveler>
            <ul>
                <StyledListItem>
                    <StyledNavLink to="/">{home}</StyledNavLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledNavLink to="/aboutme">{about}</StyledNavLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledNavLink to="/projects">{projects}</StyledNavLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledNavLink to="/contact">{contact}</StyledNavLink>
                </StyledListItem>
            </ul>
        </>
    )
};
