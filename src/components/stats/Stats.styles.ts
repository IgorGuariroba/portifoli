import styled from "styled-components";

export const StatsBox = styled.div`
  border: 1px solid ${props => props.theme.borderColor};
  padding: 1.25rem 1.8rem 1.56rem;
  border-radius: 5px;
`;
export const StatsNo = styled.h3`
  color: ${props => props.theme.firstColor};
  font-size: ${props => props.theme.h1FontSize};
  line-height: 1.2;
`;
export const StatsTitle = styled.p`
    font-size: ${props => props.theme.smallFontSize};
  line-height: 1.6;
  padding-left: 2.81rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 25%;
    width: 1.8rem;
    height: 1px;
    background-color: ${props => props.theme.textColor};
  }
`;
