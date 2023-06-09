import styled  from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {StyledLink} from "../link/Link.styles.ts";

export const Nav = styled.nav`
  @media screen and (min-width: 1024px) {
    position: fixed;
    inset-block: 0;
    right: 1.8rem;
    display: flex;
    align-items: center;
  }
`;

interface ToggleProps {
    isOpen: boolean;
}

export const Menu = styled.div<ToggleProps>`
  position: fixed;
  inset-block: 0;
  left: ${props => props.isOpen ? '0' : '-100%'};
  background-color: ${props => props.theme.containerColor};
  z-index: 1000;
  width: 100%;
  padding: 3.75rem 1.87rem;
  transition: all 0.5s cubic-bezier(0.77,0.2,0.05,1);

  @media screen and (min-width: 1024px) {
    all: unset;
  }
`;



export const List = styled.ul``;

export const Item = styled.li`
  @media screen and (min-width: 1024px) {
    margin-block: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const Name = styled.h3`
  font-size: 1rem;
  font-weight: ${props => props.theme.weigth500};
  @media screen and (min-width: 1024px) {
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${props => props.theme.firstColor};
    height: 100%;
    line-height: 3.1rem;
    padding-inline: 1.8rem 1.5rem;
    border-radius: 1.8rem;
    font-size: ${props => props.theme.smallFontSize};
    color: ${props => props.theme.textWhite};
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: -1;
    ${StyledLink}:hover & {
      opacity: 1;
      visibility: visible;
      border-radius: 1.8rem 0 0 1.8rem;
      right: 1.6rem;
    }
  }
`;


export const Toggle = styled(FontAwesomeIcon)`
  position: fixed;
  top: 1.4rem;
  right: 1.4rem;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 5px;
  padding: 0.2rem;
  background-color: ${props => props.theme.containerColor};
  z-index: 1001;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;