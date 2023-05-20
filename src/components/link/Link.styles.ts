import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  padding-block: 0.90rem;
  color: ${props => props.theme.titleColor};
  &:active > *{
    color: ${props => props.theme.firstColor};
  }
`;