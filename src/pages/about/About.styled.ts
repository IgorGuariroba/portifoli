import styled  from "styled-components";
import {Button, Icon} from "../home/Home.styles.ts";


export const SectionContainer = styled.main`
  max-width: 1040px;
  margin-inline: auto;
  padding-block: 4.3rem;
  padding-inline: 0.93rem;
  align-items: flex-start;

  @media screen and (min-width: 1040px) and (max-width: 1198px) {
    max-width: 800px;
    box-sizing: border-box;
    overflow: hidden;
  }

  @media screen and (max-width: 999px) {
    overflow-x: hidden;
  }
`;
export const AboutS = styled.section`
`;
export const Title = styled.h2`
  font-size: ${props => props.theme.bigFontSize};
  font-weight: ${props => props.theme.weigth800};
  text-align: center;
  margin-bottom: 4.3rem;
  span:first-child {
    color: ${props => props.theme.firstColor} !important;
  }
`;
export const Grid = styled.div`
  display: grid;
  gap: 1.8rem;
`;

export const AboutContainerGrid = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;

  @media screen and (max-width: 926px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const InfoAbout = styled.div`
`;
export const Subtitle = styled.h3`
  font-size: ${props => props.theme.h3FontSize};
  font-weight: ${props => props.theme.weigth600};
  margin-bottom: 1.25rem;
  @media screen and (max-width: 926px) {
    text-align: center;
    max-width: 89%;
  }
`;
export const ListGrid = styled.ul`
  display: grid;
  gap: 1.8rem;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 1040px) and (max-width: 1198px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 926px) {
    gap: 0.4rem;
    grid-template-columns: repeat(1, 1fr);
    max-width: 20rem;
    margin-left: 0.8rem;
  }
`;
export const ButtonAbout = styled(Button)``;
export const IconAbout = styled(Icon)`
    color: ${props => props.theme.textWhite}!important;
`;

export const StatsGrid = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 926px) {
    grid-template-columns: repeat(1, 1fr);
  }
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
  @media screen and (max-width: 926px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Resulme = styled.section`

`;
export const ResulmeContainerGrid = styled.div`
  display: grid;
  gap: 1.8rem;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: row;
  align-items: flex-start;
  @media screen and (max-width: 926px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const ResulmeData = styled.div`
  max-width: 100%;
  overflow: hidden;
`;