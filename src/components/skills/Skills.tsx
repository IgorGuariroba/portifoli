import {skills} from "../../Data.tsx";
import {ProgressBox, ProgressCicle, SkillTitle} from "./Skills.styled.ts";
import {CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { useTheme } from 'styled-components';
export function Skill() {
    const theme = useTheme();
    return (
        <>
            {skills.map(({id, title, percentage}) => (
                <ProgressBox key={id}>
                    <ProgressCicle>
                        <CircularProgressbar
                            strokeWidth={5.5}
                            text={`${percentage}%`}
                            value={percentage}
                            styles={{
                                path: {
                                    stroke: theme.firstColor,
                                },
                                text: {
                                    fill: theme.titleColor,
                                    fontSize: theme.largeFontSize,
                                    fontFamily: theme.secondFont,
                                },
                            }}
                        />
                    </ProgressCicle>
                    <SkillTitle>{title}</SkillTitle>
                </ProgressBox>
            ))}
        </>
    );
}