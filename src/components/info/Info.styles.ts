import styled from "styled-components";
export const InfoItem = styled.li`
  @media screen and (max-width: 926px) {
    background-color: ${props => props.theme.containerColor};
    padding: 0.5rem 0 0.5rem 0.5rem;
    border-radius: 8px;
  }
`;
export const InfoTitle = styled.span`
  font-size: ${props => props.theme.smallFontSize};
  color: ${props => props.theme.titleColor} !important;
  font-weight: ${props => props.theme.weigth600};
`;
export const InfoDescription = styled.span`
  font-size: ${props => props.theme.smallFontSize};
  color: ${props => props.theme.titleColor} !important;
  font-weight: ${props => props.theme.weigth600};
`;