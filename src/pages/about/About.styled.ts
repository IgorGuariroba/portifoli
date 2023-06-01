import styled  from "styled-components";
import {Button, Icon} from "../home/Home.styles.ts";

/* ========= REUSABLE COMPONENTS ========= */
// section padding-block: 70px;
// grid display: grid; gap: 30px;
// section__title font-size:big-font-size;  font-weight:800; text-align:center; margin-bottom:70px;
// container max-width:1140px; margin-inline:auto;

export const SectionContainer = styled.main`
  max-width: 1140px;
  margin-inline: auto;
  padding-block: 4.3rem;

  & span {
    color: ${props => props.theme.firstColor};
  }
`;
export const AboutS = styled.section``;
export const Title = styled.h2`
  font-size: ${props => props.theme.bigFontSize};
  font-weight: ${props => props.theme.weigth800};
  text-align: center;
  margin-bottom: 4.3rem;
`;
export const Grid = styled.div`
  display: grid;
  gap: 1.8rem;
`;

export const AboutContainerGrid = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);
`;

export const InfoAbout = styled.div`
`;
export const Subtitle = styled.h3`
  font-size: ${props => props.theme.h3FontSize};
  font-weight: ${props => props.theme.weigth600};
  margin-bottom: 1.25rem;
`;
export const ListGrid = styled.ul`
  display: grid;
  gap: 1.8rem;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;
  margin-bottom: 2rem;
`;
export const ButtonAbout = styled(Button)``;
export const IconAbout = styled(Icon)`
    color: ${props => props.theme.textWhite}!important;
`;

export const StatsGrid = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);
`;

export const Separator = styled.div`
  border-top: 1px  solid ${props => props.theme.borderColor};
  max-width: 40%;
  margin: 4.5rem auto 3.5rem;
`;

export const  SkillsAbout = styled.section`

`;

export const SectionSubTitle = styled.h3`
    text-align: center;
    margin-bottom: 3.12rem;
`;

export const SkillsContainerGrid = styled.div`
  display: grid;
  gap: 1.8rem;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 3rem;
  justify-items: center;
`;