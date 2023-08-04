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
                        {t("aboutMe")}
                    </Description>

                    <Button to={'/sobre'}>
                        {t("more")} <Icon><FaArrowRight/></Icon>
                    </Button>
                </Data>
            </Content>

            <ColorBlock>

            </ColorBlock>
        </Grid>
    );
}