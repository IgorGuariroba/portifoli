import styled  from "styled-components";
import {NavLink} from "react-router-dom";
export const Grid = styled.section`
  display: grid;
  gap: 1.8rem;
  padding-block: 4.3rem;
  grid-template-columns: 4.32fr 7.68fr;
  align-items: center;
  padding: 2.5rem;
  height: 100vh;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    align-items: start;
  }

  @media screen and (max-width: 1191px) {
    justify-items: start
  }

  @media screen and (max-width: 1109px) {
    justify-items: start
  }

  @media screen and (max-width: 999px) {
    gap: 0;
  }
`;
export const Img = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  box-shadow: 0 0 8px hsla(0,0%,0%,0.3);
  z-index: 1;
  @media screen and (max-width: 1024px) { 
    height: 60%;
  }
  @media screen and (max-width: 1191px) {
    max-width: 90%;
    max-height: 70%;
  }

  @media screen and (max-width: 999px) {
    margin-top: 2rem;
    height: 100%;
  }

`;
export const Content = styled.div``;
export const Data = styled.div`
  max-width: 37.5rem;
  margin-inline: auto;
  padding-top: 1.2rem;
  @media screen and (min-width: 1026px) and (max-width: 1191px) {
    max-width: 27.5rem;
  }

`;
export const Title = styled.h1`
  position: relative;
  font-size: ${props => props.theme.h1FontSize};
  line-height: 1.24;
  padding-left: 4.3rem;

  span:first-child {
    color: ${props => props.theme.firstColor} !important;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 22%;
    width: 2.5rem;
    height: 0.3rem;
    border-radius: 10px;
    background-color: ${props => props.theme.firstColor};
  }
`;
export const Span = styled.span`
    color: ${props => props.theme.firstColor};
`;
export const Description = styled.p`
  line-height: 2.1;
  margin-block: 1rem 2rem;

`;
export const Button = styled(NavLink)`
  display: inline-block;
  color: ${props => props.theme.titleColor};
  border: 1px solid ${props => props.theme.firstColor};
  padding: 0.9rem 4.3rem 0.9rem 2.1rem;
  border-radius: 35px;
  font-family: ${props => props.theme.secondFont};
  font-size: ${props => props.theme.smallFontSize};
  font-weight: ${props => props.theme.weigth500};
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease-in-out;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    transform: translateX(100%);
    background-color: ${props => props.theme.firstColor};
    transition: all 0.3s ease-out;
  }
  
  &:hover {
    color: ${props => props.theme.textWhite};
    background-color: ${props => props.theme.firstColor};
  }
  
  &:hover::before {
    transform: translateX(0);
  }
`;
export const Icon = styled.span`
  background-color: ${props => props.theme.firstColor};
  position: absolute;
  inset-block: -3px;
  right: 0;
  width: 3.3rem;
  border-radius: 50%;
  color: ${props => props.theme.textWhite};
  text-align: center;
  line-height: 3.7rem;
  height: 3.3rem;
`;

export const ColorBlock = styled.div`
  position: fixed;
  height: 200%;
  width: 100%;
  background-color: ${props => props.theme.firstColor};
  top: -50%;
  left: -83%;
  transform: rotate(-15deg);

  @media screen and (max-width: 1024px) {
    transform: rotate(40deg);
    top: -80%;
  }
`;