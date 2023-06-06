import styled from "styled-components";

export const ResulmeItemStyled = styled.div`
  max-width: 100%;
  position: relative;
  padding: 0.8rem   0.8rem   1.25rem 3rem;
  &:not(:last-child) {
      margin-bottom: 3.12rem;
  }
  
  &::before {
    content: "";
    position: absolute;
    inset-block: 0;
    left: 1.25rem;
    border-left: 1px solid ${props => props.theme.borderColor};
  }
`;
export const ResulmeIcon = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${props => props.theme.firstColor};
  color: ${props => props.theme.textWhite};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  text-align: center;
  line-height: 2.5rem;
;
`;
export const ResulmeDate = styled.span`
  background-color: ${props => props.theme.containerColor};
  padding: 2px  10px;
  border-radius: 20px;
  font-size: ${props => props.theme.tinyFontSize};
  font-weight: ${props => props.theme.weigth600};
`;
export const ResulmeSubTitle = styled.h3`
 font-size: ${props => props.theme.largeFontSize};
  font-weight: ${props => props.theme.weigth500};
  margin-block: 1.25rem 0.62rem;
  span {
    color: ${props => props.theme.textColor};
    font-family: ${props => props.theme.bodyFont};
    font-size: ${props => props.theme.smallFontSize};
    font-weight: ${props => props.theme.weigth600};
    position: relative;
    padding: 1.62rem;
  }
  
  span::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 9px;
    width: 10px;
    height: 2px;
    background-color: ${props => props.theme.textColor};
  }
`;
export const ResulmeDescription = styled.p`
  font-size: ${props => props.theme.smallFontSize};
  line-height: 1.6;
`;

