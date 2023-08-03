import {Button, ColorBlock, Content, Data, Description, Grid, Icon, Img, Span, Title} from "./Home.styles.ts";
import {FaArrowRight} from "react-icons/fa";
import {useTranslation} from 'react-i18next';

export function Home() {
    const {t} = useTranslation();
    return (
        <Grid>
            <Img src="https://avatars.githubusercontent.com/IgorGuariroba"></Img>
            <Content>
                <Data>
                    <Title>
                        {t("iam")}<Span>{t("dev")}</Span>
                    </Title>

                    <Description>
                        Welcome to my portfolio! As a Full Cycle Developer, I engage in every phase of software
                        development. Here you'll find a range of projects that showcase my skills in Front-End,
                        Back-End, DevOps, and Agile practices. I look forward to collaborating on your next project.
                    </Description>

                    <Button to={'/sobre'}>
                        More About Me <Icon><FaArrowRight/></Icon>
                    </Button>
                </Data>
            </Content>

            <ColorBlock>

            </ColorBlock>
        </Grid>
    );
}