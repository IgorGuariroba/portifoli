import {
    AboutContainerGrid,
    AboutS,
    ButtonAbout,
    IconAbout,
    InfoAbout,
    ListGrid, SectionContainer, SectionSubTitle, Separator, SkillsAbout, SkillsContainerGrid,
    StatsGrid,
    Subtitle,
    Title
} from "./About.styled.ts";
import {Info} from "../../components/info/Info.tsx";
import {FaDownload} from "react-icons/fa";
import {Stats} from "../../components/stats/Stats.tsx";
import {Skill} from "../../components/skills/Skills.tsx";

export function About() {
    return (
        <SectionContainer>
            <AboutS>
                <Title>About <span>Me</span></Title>
                <AboutContainerGrid>
                    <InfoAbout>
                        <Subtitle>Personal  Infos</Subtitle>

                        <ListGrid>
                            <Info></Info>
                        </ListGrid>

                        <ButtonAbout to={'/'}>
                            Download CV
                            <IconAbout><FaDownload/></IconAbout>
                        </ButtonAbout>
                    </InfoAbout>
                    <StatsGrid>
                        <Stats></Stats>
                    </StatsGrid>
                </AboutContainerGrid>
            </AboutS>
            <Separator>

            </Separator>
            <SkillsAbout>
                <SectionSubTitle>My Skills</SectionSubTitle>
                <SkillsContainerGrid>
                    <Skill />
                </SkillsContainerGrid>
            </SkillsAbout>
        </SectionContainer>
    );
}