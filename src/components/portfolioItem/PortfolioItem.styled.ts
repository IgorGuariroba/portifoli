import styled from "styled-components";
import {AiOutlineCloseCircle} from "react-icons/ai";
export const PortfolioImg = styled.img`
  width: 100%;
  height: 15.65rem;
  object-fit: cover;
  vertical-align: middle;

  @media screen and (max-width: 1020px) {
    height: 100%;
  }
`;
export const PortfolioHover = styled.div`
  background-color: ${props => props.theme.firstColor};
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  transition: all 0.5s ease;
`;

export const PortfolioTitle = styled.h3`
  color: ${props => props.theme.textWhite};
  font-size: ${props => props.theme.largeFontSize};
  font-weight: ${props => props.theme.weigth500};
  transform: translateY(-20px);
  transition: all 0.5s ease;
`;

export const PortfolioItemStyled = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  &:hover ${PortfolioHover} {
    opacity: 1;
  }
  
  &:hover ${PortfolioTitle} {
    transform: translateY(0);
  }

  @media screen and (max-width: 1020px) {
    height: 37.5rem;
  }
`;


export const PortfolioModal = styled.div`
  position: fixed;
  inset: 0;
  background-color: hsla(0, 0%, 0%, 0.7);
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 0.8rem;
`;
export const PortfolioModalContent = styled.div`
  background-color: ${props => props.theme.containerColor};
  max-width: 40.62rem;
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  position: relative;

  @media screen and (max-width: 1020px) {
    max-width: 25rem;
    padding: 0.9rem;
  }

  @media screen and (max-width: 999px) {
    max-width: 18rem;
    max-height: 27rem;
  }
`;
export const ModalClose = styled.span`
  width: 3.12rem;
  position: absolute;
  top: -3.5%;
  right: -8.5%;
  height: 3.12rem;
  filter: invert(0.8);

  @media screen and (max-width: 1020px) {
    top: -7.5%;
    right: -9.5%;
  }

  @media screen and (max-width: 999px) {
    top: -11.5%;
    left: -3.5%;
    filter: brightness(130%) saturate(120%);
  }
`;

export const StyledIcon = styled(AiOutlineCloseCircle)`
  width: 100%;
  height: 100%;
`;
export const ModalTitle = styled.h3`
  text-align: center;
  color: ${props => props.theme.firstColor};
  font-size: ${props => props.theme.h2FontSize};
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
`;
export const ModalListGrid = styled.ul`
  display: grid;
  gap: 1.87rem;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 10px;
  margin-bottom: 1.5rem;
`;

export const ModalItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 8px;
  text-align: center;
  padding: 2px;
`;
export const ItemIcon = styled.span`
  display: flex;
`;
export const SpanItemTitle = styled.span`
  font-size: ${props => props.theme.smallFontSize};
  color: ${props => props.theme.titleColor};
`;
export const SpanItemDetails = styled.span`
  font-size: ${props => props.theme.smallFontSize};
  color: ${props => props.theme.titleColor};
  font-weight: ${props => props.theme.weigth600};
`;
export const ModalImg = styled.img`
  width: 100%;
  height: 21.87rem;
  object-fit: cover;
  @media screen and (max-width: 999px) {
    height: 14rem;    
  }
`;

export const ProtfolioLink = styled.a`

`;
