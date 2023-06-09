import styled  from "styled-components";


export const PortifolioSection = styled.section`
  padding-block: 4.37rem;
`;

export const SectionTitle = styled.h2`
  font-size: ${props => props.theme.bigFontSize};
  font-weight: ${props => props.theme.weigth800};
  text-align: center;
  margin-bottom: 4.37rem;
  span:first-child {
    color: ${props => props.theme.firstColor} !important;
  }
`;

export const PortifolioContainerGrid = styled.div`
   display: grid;
   gap: 1.87rem;
   max-width:1140px;
   margin-inline:auto;
   padding-inline: 0.93rem;
  
  grid-template-columns: repeat(3, 1fr);
`;