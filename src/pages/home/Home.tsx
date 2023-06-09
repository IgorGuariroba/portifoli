import {Button, ColorBlock, Content, Data, Description, Grid, Icon, Img, Span, Title} from "./Home.styles.ts";
import {FaArrowRight} from "react-icons/fa";
export function Home() {
    return (
        <Grid>
            <Img src="https://avatars.githubusercontent.com/IgorGuariroba"></Img>
            <Content>
                <Data>
                    <Title>
                        I'm Igor Ravel. <Span>Developer</Span>
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