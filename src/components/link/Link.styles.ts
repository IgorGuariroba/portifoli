import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const StyledLink = styled(NavLink)<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  padding-block: 0.90rem;
  color: ${props => props.theme.titleColor};
  &:active > *{
    color: ${props => props.theme.firstColor};
  }

  @media screen and (min-width: 1024px) {
    border-bottom: none;
    background-color: ${props => props.theme.containerColor};
    width: 3.1rem;
    height: 3.1rem;
    border-radius: 50%;
    position: relative;
    &:hover {
      background-color: ${props => props.theme.firstColor};
      color: ${props => props.theme.textWhite};
    }

    ${props => props.isActive && `
      background-color: ${ props.theme.firstColor};
      color: ${ props.theme.textWhite};
     
    `}
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  @media screen and (min-width: 1024px) {
    font-size: 1.2rem;
    margin-inline: auto;
  }
`;