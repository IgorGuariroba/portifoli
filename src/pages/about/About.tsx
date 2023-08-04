import {
    AboutContainerGrid,
    AboutS,
    ButtonAbout,
    IconAbout,
    InfoAbout,
    ListGrid,
    Resulme,
    ResulmeContainerGrid, ResulmeData,
    SectionContainer,
    SectionSubTitle,
    Separator,
    SkillsAbout,
    SkillsContainerGrid,
    StatsGrid,
    Subtitle,
    Title
} from "./About.styled.ts";
import {Info} from "../../components/info/Info.tsx";
import {FaDownload} from "react-icons/fa";
import {Stats} from "../../components/stats/Stats.tsx";
import {Skill} from "../../components/skills/Skills.tsx";
import {resulme} from "../../Data.tsx";
import {ResulmeItem} from "../../components/resulmeItem/ResulmeItem.tsx";
import {useTranslation} from "react-i18next";

export function About() {
    const {t} = useTranslation();
    return (
        <SectionContainer>
            <AboutS>
                <Title> {t("about")} <span>{t("me")}</span></Title>
                <AboutContainerGrid>
                    <InfoAbout>
                        <Subtitle>{t("infoMe")}</Subtitle>

                        <ListGrid>
                            <Info></Info>
                        </ListGrid>

                        <ButtonAbout to={'/'}>
                            Download Cv
                            <IconAbout><FaDownload/></IconAbout>
                        </ButtonAbout>
                    </InfoAbout>
                    <StatsGrid>
                        <Stats></Stats>
                    </StatsGrid>
                </AboutContainerGrid>
            </AboutS>

            <Separator/>

            <SkillsAbout>
                <SectionSubTitle>My Skills</SectionSubTitle>
                <SkillsContainerGrid>
                    <Skill/>
                </SkillsContainerGrid>
            </SkillsAbout>

            <Separator/>

            <Resulme>
                <SectionSubTitle>Experience & Education</SectionSubTitle>

                <ResulmeContainerGrid>

                    <ResulmeData>
                        {resulme.map((val) => {
                            if(val.category ==='Experience'){
                                return <ResulmeItem key={val.id} {...val} />;
                            }
                        })}
                    </ResulmeData>

                    <ResulmeData>
                        {resulme.map((val) => {
                            if(val.category ==='education'){
                                return <ResulmeItem key={val.id} {...val} />;
                            }
                        })}
                    </ResulmeData>
                </ResulmeContainerGrid>
            </Resulme>
        </SectionContainer>
    );
}