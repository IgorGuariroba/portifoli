import {AboutS, Container, Grid, Info, ListGrid, Subtitle, Title} from "./About.styled.ts";

export function About() {
    return (
        <Container>
            <AboutS>
                <Title>About <span>Me</span></Title>
                <Grid>
                    <Info>
                    <Subtitle>Personal Infos</Subtitle>
                        <ListGrid></ListGrid>
                    </Info>
                </Grid>
            </AboutS>
        </Container>
    );
}