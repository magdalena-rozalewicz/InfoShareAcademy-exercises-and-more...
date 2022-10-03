import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeaderTraveler = styled.h2`
    padding: 12px;
    margin: 0 auto;
    background-color: rgba(0, 0, 128, 0.8);
    color: white;
`
export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: navy;
        &:hover{
            color: white;
        }
`
export const StyledListItem = styled.li`
    border-bottom: 2px solid rgba(0, 0, 128, 0.5);
    padding: 4px;
    margin: 0 32px 0 0;
    list-style: none;
    background-color: aliceblue;
        &:hover{
            background-color: #000080;
            text-decoration: underline;
        }
        &:active{
            background-color: rgba(0, 0, 128, 0.5);
        }
`